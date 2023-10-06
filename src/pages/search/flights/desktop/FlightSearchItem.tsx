import { useState } from "react";
import FlightDetailsIcon from "../../../../assets/FlightDetailsIcon";
import RulesIcon from "../../../../assets/RulesIcon";
import {
  FlightSearchItemInfoType,
  PtcFareBreakdownItemType,
} from "../../../../types";
type Props = {
  info: any;
  findAirlineName: (code: string) => string;
  findCityNameAndAirport: (code: string) => string[];
};

const FlightSearchItem = ({
  info,
  findAirlineName,
  findCityNameAndAirport,
}: Props) => {
  const [activeTab, setActiveTab] = useState(1);
  const [showDetails, setShowDetails] = useState(false);

  const changeTab = (id: number) => {
    setActiveTab(id);
  };

  const showDetailsHandler = () => {
    setShowDetails((oldValue) => !oldValue);
  };

  const timeHandler = (time: string): string => {
    let t = new Date(time);
    let h = t.getHours();
    let m = t.getMinutes();
    return `${h < 10 ? "0" : ""}${h}:${m < 10 ? "0" : ""}${m}`;
  };

  const journeyDurationHandler = (amount: string): string => {
    let amountArray = amount.split(":");
    let h = Number(amountArray[0]);
    let m = Number(amountArray[1]);
    let textPart1 = `${h} ساعت`;
    let textPart2 = `${m} دقیقه`;
    let result = "";
    if (h === 0) {
      result = textPart2;
    } else if (m === 0) {
      result = textPart1;
    } else {
      result = textPart1 + " و " + textPart2;
    }
    return result;
  };

  const findPassengerQuantity = (list: PtcFareBreakdownItemType[]): number => {
    let result = 0;
    for (let i = 0; i < list.length; i++) {
      result += list[i].passengerTypeQuantity.quantity;
    }
    return result;
  };

  const ptcFareBreakdown = (
    type: string,
    list: PtcFareBreakdownItemType[]
  ): number[] => {
    let result = [0, 0];
    for (let i = 0; i < list.length; i++) {
      if (list[i].passengerTypeQuantity.passengerType === type) {
        result[0] = list[i].passengerTypeQuantity.quantity;
        result[1] = list[i].passengerFare.totalFare;
      }
    }
    return result;
  };

  const classTypeHandler = (code: string): string => {
    let result = "";
    if (["Y", "H", "K", "M", "L", "G", "V", "S", "N"].includes(code)) {
      result = "اکونومی";
    } else if (["C", "J", "R", "D"].includes(code)) {
      result = "بیزینس";
    } else if (["F", "A"].includes(code)) {
      result = "فرست کلاس";
    }
    return result;
  };

  const dateHandler = (date: string): string => {
    let newDate = new Date(date);
    let dateFa = new Intl.DateTimeFormat("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(newDate);
    return dateFa;
  };

  const dateHandlerAD = (date: string): string => {
    let newDate = new Date(date);
    let dateFa = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
    }).format(newDate);
    return dateFa;
  };
  return (
    <div className="w-full bg-[#fff] mt-[16px]">
      {/* ----------row1------------------- */}
      <div className="w-full flex h-[142.5px] border-b border-[#eeeeee]">
        <div className="w-[77.5%] h-full pl-[60px] pr-[18px] flex items-center justify-between">
          <div className="flex items-center gap-x-[16px]">
            <img src="/image/sampleAirLineLogo.png" className="w-[56px]" />
            <div className="text-[14px] text-[#464646]">
              {findAirlineName(
                info?.originDestinationOptions[0]?.flightSegments[0]
                  ?.operatingAirline?.code
              )}
            </div>
          </div>
          <div className="flex items-center gap-x-[16px]">
            <div className="w-[95px] flex flex-col items-center gap-y-[6px] ">
              <div className="text-[24px] text-[#464646] font-bold">
                {timeHandler(
                  info?.originDestinationOptions[0]?.flightSegments[0]
                    ?.departureDateTime
                )}
              </div>
              <div className="text-[14px] text-[#464646] pb-2">
                {
                  findCityNameAndAirport(
                    info?.originDestinationOptions[0]?.flightSegments[0]
                      ?.departureAirportLocationCode
                  )[0]
                }{" "}
                <span className="text-[12px] text-[#8d8d8d]">
                  (
                  {
                    info?.originDestinationOptions[0]?.flightSegments[0]
                      ?.departureAirportLocationCode
                  }
                  )
                </span>
              </div>
            </div>
            <div className="w-[171px] flex items-center">
              <div className="w-[12px] h-[12px] rounded-full border border-[#1773dc]"></div>
              <div className="w-[147px] relative">
                <div className="w-full text-center text-[12px] text-[#6f6f6f] absolute -translate-y-6">
                  {journeyDurationHandler(
                    info?.originDestinationOptions[0]?.flightSegments[0]
                      ?.journeyDuration
                  )}
                </div>
                <div className="w-full h-px bg-[#c6c6c6]"></div>
              </div>
              <div className="w-[12px] h-[12px] rounded-full border border-[#ff7913]"></div>
            </div>
            <div className="w-[95px] flex flex-col items-center gap-y-[6px] ">
              <div className="text-[24px] text-[#464646] font-bold relative">
                {timeHandler(
                  info?.originDestinationOptions[0]?.flightSegments[0]
                    ?.arrivalDateTime
                )}{" "}
                <span className="absolute text-[13px] text-[#ff1d23] -translate-x-1 -translate-y-1 text-left ltr">
                  +1
                </span>
              </div>
              <div className="text-[14px] text-[#464646] pb-2">
                {
                  findCityNameAndAirport(
                    info?.originDestinationOptions[0]?.flightSegments[0]
                      ?.arrivalAirportLocationCode
                  )[0]
                }{" "}
                <span className="text-[12px] text-[#8d8d8d]">
                  (
                  {
                    info?.originDestinationOptions[0]?.flightSegments[0]
                      ?.arrivalAirportLocationCode
                  }
                  )
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[22.5%] h-full border-r border-[#eeeeee] flex flex-col items-center justify-center gap-y-[10px] px-[16px]">
          <div className="text-[12px] text-[#8d8d8d]">
            {findPassengerQuantity(
              info?.airItineraryPricingInfo?.ptcFareBreakdown
            )}{" "}
            نفر
          </div>
          <div className="text-[20px] text-[#1773dc] font-bold">
            {Intl.NumberFormat().format(
              info?.airItineraryPricingInfo?.itinTotalFare?.totalFare
            )}{" "}
            <span className="text-[#8d8d8d] text-[13px] font-normal">
              تومان
            </span>
          </div>
          <div className="w-full h-[40px] rounded flex items-center justify-center bg-[#1773dc] text-[14px] text-[#fff] cursor-pointer">
            انتخاب بلیط
          </div>
        </div>
      </div>
      {/* ----------row2------------------- */}
      <div className="w-full h-[41.5px] flex ">
        <div className="w-[77.5%] h-full flex items-center gap-x-[16px] pr-[18px]">
          <div className="text-[12px] text-[#464646] px-[14px] py-[4px] rounded bg-[#f4f4f4]">
            {info?.originDestinationOptions[0]?.flightSegments[0]?.isCharter
              ? "چارتر"
              : "سیستمی"}
          </div>
          <div className="flex items-center gap-x-[7px]">
            <div className="text-[12px] text-[#464646]">
              {classTypeHandler(
                info?.originDestinationOptions[0]?.flightSegments[0]
                  ?.cabinClassCode
              )}
            </div>
            <div className="text-[12px] text-[#464646]">.</div>
            <div className="text-[12px] text-[#464646]">
              {
                info?.originDestinationOptions[0]?.flightSegments[0]
                  ?.seatsRemaining
              }{" "}
              صندلی خالی
            </div>
            <div className="text-[12px] text-[#464646]">.</div>
            <div className="text-[12px] text-[#464646]">
              شماره پرواز :{" "}
              {
                info?.originDestinationOptions[0]?.flightSegments[0]
                  ?.flightNumber
              }
            </div>
            <div className="text-[12px] text-[#464646]">.</div>
            <div className="text-[12px] text-[#464646]">
              تامین‌کننده: پرایس لاین
            </div>
          </div>
        </div>
        <div className="w-[22.5%] h-full flex items-center justify-center">
          <div
            className="flex items-center gap-x-1.5 cursor-pointer select-none"
            onClick={showDetailsHandler}
          >
            <div className="text-[12px] text-[#ff7913]">جزئیات بیشتر</div>
            <img
              src="/icon/Polygon.png"
              className={`w-[7px] ${!showDetails ? "rotate-180" : ""}`}
            />
          </div>
        </div>
      </div>
      {/* ----------row3------------------- */}
      {showDetails && (
        <div className="w-full">
          <div className="w-full h-[67px] flex items-end border-b border-[#eeeeee]">
            <div
              className={`h-[40px] px-[14px] flex items-center justify-center gap-x-[8px] cursor-pointer rounded-t ${
                activeTab === 1 ? "bg-[#1773dc] text-[#fff]" : ""
              }`}
              onClick={() => changeTab(1)}
            >
              <FlightDetailsIcon
                width="19px"
                color={activeTab === 1 ? "#fff" : "#8d8d8d"}
              />
              <div
                className={`text-[14px] text-[#8d8d8d] ${
                  activeTab === 1 ? "text-[#fff]" : ""
                }`}
              >
                جزئیات پرواز
              </div>
            </div>
            <div
              className={`h-[40px] px-[14px] flex items-center justify-center gap-x-[8px] cursor-pointer rounded-t ${
                activeTab === 2 ? "bg-[#1773dc] text-[#fff]" : ""
              }`}
              onClick={() => changeTab(2)}
            >
              <RulesIcon
                width="19px"
                color={activeTab === 2 ? "#fff" : "#8d8d8d"}
              />
              <div
                className={`text-[14px] text-[#8d8d8d] ${
                  activeTab === 2 ? "text-[#fff]" : ""
                }`}
              >
                قوانین و شرایط
              </div>
            </div>
          </div>
          {activeTab === 1 && (
            <div className="w-full p-[16px] pt-[19px]">
              <div className="text-[16px] text-[#464646] font-bold">
                پرواز{" "}
                {info?.originDestinationOptions[0]?.flightSegments[0]?.isReturn
                  ? "برگشت"
                  : "رفت"}{" "}
                {
                  findCityNameAndAirport(
                    info?.originDestinationOptions[0]?.flightSegments[0]
                      ?.departureAirportLocationCode
                  )[0]
                }{" "}
                -{" "}
                {
                  findCityNameAndAirport(
                    info?.originDestinationOptions[0]?.flightSegments[0]
                      ?.arrivalAirportLocationCode
                  )[0]
                }
              </div>
              {/* ---- */}
              <div className="flex items-stretch gap-x-[29px] mt-[24px]">
                <div className="w-[40px] flex flex-col items-center justify-center">
                  <img src="/image/sampleAirLineLogo.png" className="w-full" />
                  <div className="text-[12px] text-[#6f6f6f]">ماهان</div>
                </div>
                <div className="flex items-center gap-x-[16px]">
                  <div className="flex flex-col items-center gap-y-[10px]">
                    <div className="w-[8px] h-[8px] rounded-full border border-[#870b1d]"></div>
                    <div className="w-[8px] flex flex-col items-center gap-y-[5px]">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
                        (item) => (
                          <div
                            key={item}
                            className="w-[3px] h-[3px] bg-[#c6c6c6] rounded-full"
                          ></div>
                        )
                      )}
                    </div>
                    <div className="w-[8px] h-[8px] rounded-full border border-[#870b1d]"></div>
                  </div>
                  <div>
                    <div className="flex items-center gap-x-[16px]">
                      <div className="text-[14px] text-[#464646] font-bold">
                        {timeHandler(
                          info?.originDestinationOptions[0]?.flightSegments[0]
                            ?.departureDateTime
                        )}
                      </div>
                      <div className="text-[14px] text-[#464646]">
                        {
                          findCityNameAndAirport(
                            info?.originDestinationOptions[0]?.flightSegments[0]
                              ?.departureAirportLocationCode
                          )[0]
                        }{" "}
                        (
                        {
                          info?.originDestinationOptions[0]?.flightSegments[0]
                            ?.departureAirportLocationCode
                        }
                        )
                      </div>
                      <div className="w-px h-[21px] bg-[#eeeeee]"></div>
                      <div className="text-[14px] text-[#464646]">
                        {dateHandler(
                          info?.originDestinationOptions[0]?.flightSegments[0]
                            ?.departureDateTime
                        )}{" "}
                        (
                        {dateHandlerAD(
                          info?.originDestinationOptions[0]?.flightSegments[0]
                            ?.departureDateTime
                        )}
                        )
                      </div>
                      <div className="w-px h-[21px] bg-[#eeeeee]"></div>
                      <div className="text-[14px] text-[#8d8d8d]">
                        {
                          findCityNameAndAirport(
                            info?.originDestinationOptions[0]?.flightSegments[0]
                              ?.departureAirportLocationCode
                          )[1]
                        }
                      </div>
                    </div>
                    <div className="flex gap-x-[72px] mt-[22px]">
                      <div className="175px">
                        <div className="flex items-center gap-x-[24px]">
                          <div className="text-[12px] text-[#8d8d8d]">
                            مدت پرواز
                          </div>
                          <div className="text-[12px] text-[#464646]">
                            {journeyDurationHandler(
                              info?.originDestinationOptions[0]
                                ?.flightSegments[0]?.journeyDuration
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-x-[24px] mt-[8.5px]">
                          <div className="text-[12px] text-[#8d8d8d]">
                            نوع هواپیما
                          </div>
                          <div className="text-[12px] text-[#464646]">
                            Airbus A320
                          </div>
                        </div>
                        <div className="flex items-center gap-x-[24px] mt-[8.5px]">
                          <div className="text-[12px] text-[#8d8d8d]">
                            کلاس پرواز
                          </div>
                          <div className="text-[12px] text-[#464646]">
                            {classTypeHandler(
                              info?.originDestinationOptions[0]
                                ?.flightSegments[0]?.cabinClassCode
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="116px">
                        <div className="flex items-center gap-x-[24px]">
                          <div className="text-[12px] text-[#8d8d8d]">
                            نوع پرواز
                          </div>
                          <div className="text-[12px] text-[#464646]">
                            {info?.originDestinationOptions[0]
                              ?.flightSegments[0]?.isCharter
                              ? "چارتر"
                              : "سیستمی"}
                          </div>
                        </div>
                        <div className="flex items-center gap-x-[24px] mt-[8.5px]">
                          <div className="text-[12px] text-[#8d8d8d]">
                            بار مجاز
                          </div>
                          <div className="text-[12px] text-[#464646]">
                            {info?.originDestinationOptions[0]
                              ?.flightSegments[0]?.baggage || "-"}{" "}
                            {info?.originDestinationOptions[0]
                              ?.flightSegments[0]?.baggage && "کیلوگرم"}
                          </div>
                        </div>
                        <div className="flex items-center gap-x-[24px] mt-[8.5px]">
                          <div className="text-[12px] text-[#8d8d8d]">
                            کلاس نرخی
                          </div>
                          <div className="text-[12px] text-[#464646]">
                            {
                              info?.originDestinationOptions[0]
                                ?.flightSegments[0]?.cabinClassCode
                            }
                          </div>
                        </div>
                      </div>
                      <div className="150px">
                        <div className="flex items-center gap-x-[24px]">
                          <div className="text-[12px] text-[#8d8d8d]">
                            استرداد
                          </div>
                          <div className="text-[12px] text-[#ff1d23]">
                            غیر قابل استرداد
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-[16px] mt-[22px]">
                      <div className="text-[14px] text-[#464646] font-bold">
                        {timeHandler(
                          info?.originDestinationOptions[0]?.flightSegments[0]
                            ?.arrivalDateTime
                        )}
                      </div>
                      <div className="text-[14px] text-[#464646]">
                        {
                          findCityNameAndAirport(
                            info?.originDestinationOptions[0]?.flightSegments[0]
                              ?.arrivalAirportLocationCode
                          )[0]
                        }{" "}
                        (
                        {
                          info?.originDestinationOptions[0]?.flightSegments[0]
                            ?.arrivalAirportLocationCode
                        }
                        )
                      </div>
                      <div className="w-px h-[21px] bg-[#eeeeee]"></div>
                      <div className="text-[14px] text-[#464646]">
                        {dateHandler(
                          info?.originDestinationOptions[0]?.flightSegments[0]
                            ?.arrivalDateTime
                        )}{" "}
                        (
                        {dateHandlerAD(
                          info?.originDestinationOptions[0]?.flightSegments[0]
                            ?.arrivalDateTime
                        )}
                        )
                      </div>
                      <div className="w-px h-[21px] bg-[#eeeeee]"></div>
                      <div className="text-[14px] text-[#8d8d8d]">
                        {
                          findCityNameAndAirport(
                            info?.originDestinationOptions[0]?.flightSegments[0]
                              ?.arrivalAirportLocationCode
                          )[1]
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ---- */}
              <div className="w-full h-[48px] flex border border-[#eeeeee] mt-[32px]">
                <div className="w-1/4 h-full flex items-center justify-center gap-x-[14px] border-l border-[#eeeeee]">
                  <div className="text-[14px] text-[#464646]">
                    {
                      ptcFareBreakdown(
                        "Adt",
                        info?.airItineraryPricingInfo?.ptcFareBreakdown
                      )[0]
                    }{" "}
                    × بزرگسال
                  </div>
                  <div className="text-[14px] text-[#464646]">
                    {Intl.NumberFormat().format(
                      ptcFareBreakdown(
                        "Adt",
                        info?.airItineraryPricingInfo?.ptcFareBreakdown
                      )[1]
                    )}{" "}
                    تومان
                  </div>
                </div>
                <div className="w-1/4 h-full flex items-center justify-center gap-x-[14px] border-l border-[#eeeeee]">
                  <div className="text-[14px] text-[#464646]">
                    {
                      ptcFareBreakdown(
                        "Chd",
                        info?.airItineraryPricingInfo?.ptcFareBreakdown
                      )[0]
                    }{" "}
                    × کودک
                  </div>
                  <div className="text-[14px] text-[#464646]">
                    {Intl.NumberFormat().format(
                      ptcFareBreakdown(
                        "Chd",
                        info?.airItineraryPricingInfo?.ptcFareBreakdown
                      )[1]
                    )}{" "}
                    تومان
                  </div>
                </div>
                <div className="w-1/4 h-full flex items-center justify-center gap-x-[14px] border-l border-[#eeeeee]">
                  <div className="text-[14px] text-[#464646]">
                    {
                      ptcFareBreakdown(
                        "Inf",
                        info?.airItineraryPricingInfo?.ptcFareBreakdown
                      )[0]
                    }{" "}
                    × نوزاد
                  </div>
                  <div className="text-[14px] text-[#464646]">
                    {Intl.NumberFormat().format(
                      ptcFareBreakdown(
                        "Inf",
                        info?.airItineraryPricingInfo?.ptcFareBreakdown
                      )[1]
                    )}{" "}
                    تومان
                  </div>
                </div>
                <div className="w-1/4 h-full flex items-center justify-center text-[14px] text-[#1773dc] font-bold">
                  <span className="text-[#464646] ml-1">مجموع:</span>
                  {Intl.NumberFormat().format(
                    info?.airItineraryPricingInfo?.itinTotalFare?.totalFare
                  )}{" "}
                  تومان
                </div>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="w-full h-[320px] p-[16px] pt-[19px]">
              <div className="text-[16px] text-[#464646] font-bold">
                قوانین و شرایط
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FlightSearchItem;
