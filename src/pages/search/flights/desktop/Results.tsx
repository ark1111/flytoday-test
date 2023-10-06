import { useState } from "react";
import FlightSearchItem from "./FlightSearchItem";
import ResultsHeader from "./ResultsHeader";
import sampleData from "../../../../data/flight-data.json";
import Pagination from "../../../../components/Pagination";

type Props = {};

const Results = (props: Props) => {
  const [data, setData] = useState(sampleData);
  const [activePage,setActivePage]=useState(1);

  const findAirlineName = (code: string): string => {
    let name = "";
    let list = data.additionalData.airlines;
    for (let i = 0; i < list.length; i++) {
      if (list[i].iata === code) {
        name = list[i].nameFa;
        break;
      }
    }
    return name;
  };

  const findCityNameAndAirport = (code: string): string[] => {
    let result: string[] = [];
    let list = data.additionalData.airports;
    for (let i = 0; i < list.length; i++) {
      if (list[i].iata === code) {
        result.push(list[i].cityFa);
        result.push(list[i].nameFa);
        break;
      }
    }
    return result;
  };
  return (
    <div className="w-[calc(100%-306px)]">
      <ResultsHeader data={data} />
      {data.pricedItineraries.map((item, index) => (
        <div className="w-full" key={item.id}>
          <FlightSearchItem
            info={item}
            findAirlineName={findAirlineName}
            findCityNameAndAirport={findCityNameAndAirport}
          />
        </div>
      ))}
      <div className="w-full flex justify-center mt-[32px]">
        <Pagination activePage={activePage} setActivePage={setActivePage} totalPage={7}/>
      </div>
    </div>
  );
};

export default Results;
