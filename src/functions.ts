import { sortItem } from "./types";

export const filterFunction = (
  orginalData: any,
  filterValueList: { id: number; values: number[] }[]
) => {
  let newList = [];
  let list = orginalData.pricedItineraries;
  for (let i = 0; i < list.length; i++) {
    let permission = false;
    for (let j = 0; j < filterValueList.length; j++) {
      if (filterValueList[j].id === 2) {
        //stopQuantity
        let values = filterValueList[j].values;
        if (values.includes(0)) {
          if (
            list[i].originDestinationOptions[0].flightSegments[0]
              .stopQuantity === 0
          ) {
            permission = true;
          }
        }
        if (values.includes(1)) {
          if (
            list[i].originDestinationOptions[0].flightSegments[0]
              .stopQuantity === 1
          ) {
            permission = true;
          }
        }
        if (values.includes(2)) {
          if (
            list[i].originDestinationOptions[0].flightSegments[0].stopQuantity >
            1
          ) {
            permission = true;
          }
        }
      } else if (filterValueList[j].id === 3) {
        //departure time
        let values = filterValueList[j].values;
        let d = new Date(
          list[
            i
          ].originDestinationOptions[0].flightSegments[0].departureDateTime
        );
        let h = d.getHours();
        if (values.includes(1)) {
          if (h < 12) {
            permission = true;
          }
        }
        if (values.includes(2)) {
          if (h >= 12 && h < 18) {
            permission = true;
          }
        }
        if (values.includes(3)) {
          if (h >= 18) {
            permission = true;
          }
        }
      } else if (filterValueList[j].id === 4) {
        //cabinClassCode
        let values = filterValueList[j].values;
        if (values.includes(1)) {
          if (
            [
              "Y",
              "H",
              "K",
              " M",
              "L",
              "G",
              "V",
              "S",
              "N",
              "Q",
              "O",
              "E",
            ].includes(
              list[i].originDestinationOptions[0].flightSegments[0]
                .cabinClassCode
            )
          ) {
            permission = true;
          }
        }
        if (values.includes(2)) {
          if (
            ["C", "J", "R", "D", "I"].includes(
              list[i].originDestinationOptions[0].flightSegments[0]
                .cabinClassCode
            )
          ) {
            permission = true;
          }
        }
      } else if (filterValueList[j].id === 5) {
        //flight type
        let values = filterValueList[j].values;
        if (values.includes(1)) {
          if (
            !list[i].originDestinationOptions[0].flightSegments[0].isCharter
          ) {
            permission = true;
          }
        }
        if (values.includes(2)) {
          if (list[i].originDestinationOptions[0].flightSegments[0].isCharter) {
            permission = true;
          }
        }
      }
    }
    if (permission) {
      newList.push(list[i]);
    }
  }
  return newList;
};

export const sortHandler = (list: any[], sort: sortItem) => {
  let newList = [...list];
  if (sort.value === "price-asc") {
    newList.sort((a, b) => {
      return (
        a.airItineraryPricingInfo.itinTotalFare.totalFare -
        b.airItineraryPricingInfo.itinTotalFare.totalFare
      );
    });
  } else if (sort.value === "price-des") {
    newList.sort((a, b) => {
      return (
        b.airItineraryPricingInfo.itinTotalFare.totalFare -
        a.airItineraryPricingInfo.itinTotalFare.totalFare
      );
    });
  } else if (sort.value === "time-asc") {
    newList.sort((a, b) => {
      let d1 = new Date(
        a.originDestinationOptions[0].flightSegments[0].departureDateTime
      );
      let d2 = new Date(
        b.originDestinationOptions[0].flightSegments[0].departureDateTime
      );
      return d1.getTime() - d2.getTime();
    });
  } else if (sort.value === "time-des") {
    newList.sort((a, b) => {
      let d1 = new Date(
        b.originDestinationOptions[0].flightSegments[0].departureDateTime
      );
      let d2 = new Date(
        a.originDestinationOptions[0].flightSegments[0].departureDateTime
      );
      return d1.getTime() - d2.getTime();
    });
  }
  return newList;
};
