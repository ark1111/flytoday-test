import { useState } from "react";
import FlightDetailsIcon from "../../../../assets/FlightDetailsIcon";
import RulesIcon from "../../../../assets/RulesIcon";
type Props = {};

const FlightSearchItem = (props: Props) => {
  const [activeTab, setActiveTab] = useState(1);
  const [showDetails, setShowDetails] = useState(false);

  const changeTab = (id: number) => {
    setActiveTab(id);
  };

  const showDetailsHandler = () => {
    setShowDetails((oldValue) => !oldValue);
  };
  return (
    <div className="w-full bg-[#fff] mt-[16px]">
      {/* ----------row1------------------- */}
      <div className="w-full flex h-[142.5px] border-b border-[#eeeeee]">
        <div className="w-[77.5%] h-full pl-[60px] pr-[18px] flex items-center justify-between">
          <div className="flex items-center gap-x-[16px]">
            <img src="/image/sampleAirLineLogo.png" className="w-[56px]" />
            <div className="text-[14px] text-[#464646]">ماهان</div>
          </div>
          <div className="flex items-center gap-x-[16px]">
            <div className="w-[95px] flex flex-col items-center gap-y-[6px] ">
              <div className="text-[24px] text-[#464646] font-bold">12:45</div>
              <div className="text-[14px] text-[#464646] pb-2">
                تهران <span className="text-[12px] text-[#8d8d8d]">(THR)</span>
              </div>
            </div>
            <div className="w-[171px] flex items-center">
              <div className="w-[12px] h-[12px] rounded-full border border-[#1773dc]"></div>
              <div className="w-[147px] relative">
                <div className="w-full text-center text-[12px] text-[#6f6f6f] absolute -translate-y-6">
                  3 ساعت و 45 دقیقه
                </div>
                <div className="w-full h-px bg-[#c6c6c6]"></div>
              </div>
              <div className="w-[12px] h-[12px] rounded-full border border-[#ff7913]"></div>
            </div>
            <div className="w-[95px] flex flex-col items-center gap-y-[6px] ">
              <div className="text-[24px] text-[#464646] font-bold relative">
                17:11{" "}
                <span className="absolute text-[13px] text-[#ff1d23] -translate-x-1 -translate-y-1 text-left ltr">
                  +1
                </span>
              </div>
              <div className="text-[14px] text-[#464646] pb-2">
                استانبول{" "}
                <span className="text-[12px] text-[#8d8d8d]">(IST)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[22.5%] h-full border-r border-[#eeeeee] flex flex-col items-center justify-center gap-y-[10px] px-[16px]">
          <div className="text-[12px] text-[#8d8d8d]">یک نفر</div>
          <div className="text-[20px] text-[#1773dc] font-bold">
            {Intl.NumberFormat().format(1370000)}{" "}
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
            چارتر
          </div>
          <div className="flex items-center gap-x-[7px]">
            <div className="text-[12px] text-[#464646]">اکونومی</div>
            <div className="text-[12px] text-[#464646]">.</div>
            <div className="text-[12px] text-[#464646]">7 صندلی خالی</div>
            <div className="text-[12px] text-[#464646]">.</div>
            <div className="text-[12px] text-[#464646]">شماره پرواز : 7856</div>
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
                پرواز رفت تهران - استانبول
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
                        12:45
                      </div>
                      <div className="text-[14px] text-[#464646]">
                        تهران (THR)
                      </div>
                      <div className="w-px h-[21px] bg-[#eeeeee]"></div>
                      <div className="text-[14px] text-[#464646]">
                        12 اردیبهشت 1399 (07 Apr)
                      </div>
                      <div className="w-px h-[21px] bg-[#eeeeee]"></div>
                      <div className="text-[14px] text-[#8d8d8d]">
                        Imam Khomeini Intl
                      </div>
                    </div>
                    <div className="flex gap-x-[72px] mt-[22px]">
                      <div className="175px">
                        <div className="flex items-center gap-x-[24px]">
                          <div className="text-[12px] text-[#8d8d8d]">
                            مدت پرواز
                          </div>
                          <div className="text-[12px] text-[#464646]">
                            3 ساعت و 45 دقیقه
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
                            اکونومی
                          </div>
                        </div>
                      </div>
                      <div className="116px">
                        <div className="flex items-center gap-x-[24px]">
                          <div className="text-[12px] text-[#8d8d8d]">
                            نوع پرواز
                          </div>
                          <div className="text-[12px] text-[#464646]">
                            سیستمی
                          </div>
                        </div>
                        <div className="flex items-center gap-x-[24px] mt-[8.5px]">
                          <div className="text-[12px] text-[#8d8d8d]">
                            بار مجاز
                          </div>
                          <div className="text-[12px] text-[#464646]">
                            20 کیلوگرم
                          </div>
                        </div>
                        <div className="flex items-center gap-x-[24px] mt-[8.5px]">
                          <div className="text-[12px] text-[#8d8d8d]">
                            کلاس نرخی
                          </div>
                          <div className="text-[12px] text-[#464646]">A</div>
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
                        17:45
                      </div>
                      <div className="text-[14px] text-[#464646]">
                        تهران (THR)
                      </div>
                      <div className="w-px h-[21px] bg-[#eeeeee]"></div>
                      <div className="text-[14px] text-[#464646]">
                        12 اردیبهشت 1399 (07 Apr)
                      </div>
                      <div className="w-px h-[21px] bg-[#eeeeee]"></div>
                      <div className="text-[14px] text-[#8d8d8d]">
                        (Istanbul Airport Intl)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ---- */}
              <div className="w-full h-[48px] flex border border-[#eeeeee] mt-[32px]">
                <div className="w-1/4 h-full flex items-center justify-center gap-x-[14px] border-l border-[#eeeeee]">
                  <div className="text-[14px] text-[#464646]">2 × بزرگسال</div>
                  <div className="text-[14px] text-[#464646]">
                    {Intl.NumberFormat().format(1370000)} تومان
                  </div>
                </div>
                <div className="w-1/4 h-full flex items-center justify-center gap-x-[14px] border-l border-[#eeeeee]">
                  <div className="text-[14px] text-[#464646]">1 × کودک</div>
                  <div className="text-[14px] text-[#464646]">
                    {Intl.NumberFormat().format(1370000)} تومان
                  </div>
                </div>
                <div className="w-1/4 h-full flex items-center justify-center gap-x-[14px] border-l border-[#eeeeee]">
                  <div className="text-[14px] text-[#464646]">1 × نوزاد</div>
                  <div className="text-[14px] text-[#464646]">
                    {Intl.NumberFormat().format(1370000)} تومان
                  </div>
                </div>
                <div className="w-1/4 h-full flex items-center justify-center text-[14px] text-[#1773dc] font-bold">
                  <span className="text-[#464646] ml-1">مجموع:</span>
                  {Intl.NumberFormat().format(1370000)} تومان
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
