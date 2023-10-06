export interface CheckboxItemType {
  id: number;
  text1: string;
  text2: string | null;
  value: number;
}

export interface FliterListItemType {
  id: number;
  title: string;
  type: string;
  items: null | CheckboxItemType[];
  min: null | number;
  max: null | number;
}

export interface sortItem {
  id: number;
  title: string;
  value: string;
}

export interface FlightSearchItemInfoType {
  id: number;
  isPassportMandatory: boolean;
  isDestinationAddressMandatory: boolean;
  isPassportIssueDateMandatory: boolean;
  directionInd: number;
  refundMethod: string;
  validatingAirlineCode: string;
  fareSourceCode: string;
  airItineraryPricingInfo: {
    fareType: string;
    itinTotalFare: {
      totalService: null;
      totalFare: number;
      grandTotalWithoutDiscount: number;
      discountAmount: null;
      totalVat: number;
      totalTax: number;
      totalServiceTax: number;
    };
    ptcFareBreakdown: {
      passengerFare: {
        baseFare: number;
        totalFare: number;
        serviceTax: number;
        taxes: never[];
        total: number;
        tax: number;
        vat: number;
        baseFareWithMarkup: number;
        totalFareWithMarkupAndVat: number;
      };
      passengerTypeQuantity: {
        passengerType: string;
        quantity: number;
      };
    }[];
    fareInfoes: never[];
  };
  originDestinationOptions: {
    journeyDurationPerMinut: number;
    connectionTimePerMinut: number;
    flightSegment: {
      departureDateTime: string;
      arrivalDateTime: string;
      stopQuantity: number;
      flightNumber: string;
      resBookDesigCode: string;
      journeyDuration: string;
      journeyDurationPerMinute: number;
      connectionTimePerMinute: number;
      departureAirportLocationCode: string;
      arrivalAirportLocationCode: string;
      marketingAirlineCode: string;
      cabinClassCode: string;
      operatingAirline: {
        code: string;
        flightNumber: string;
        equipment: string;
        equipmentName: null;
      };
      seatsRemaining: number;
      isCharter: true;
      isReturn: false;
      baggage: null;
      technicalStops: [];
    }[];
  }[];
  featured: null;
}

export interface PtcFareBreakdownItemType {
  passengerFare: {
    baseFare: number;
    totalFare: number;
    serviceTax: number;
    taxes: never[];
    total: number;
    tax: number;
    vat: number;
    baseFareWithMarkup: number;
    totalFareWithMarkupAndVat: number;
  };
  passengerTypeQuantity: {
    passengerType: string;
    quantity: number;
  };
}
