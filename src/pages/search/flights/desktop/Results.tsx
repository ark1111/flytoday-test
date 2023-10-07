import { useEffect, useState } from "react";
import FlightSearchItem from "./FlightSearchItem";
import ResultsHeader from "./ResultsHeader";
import sampleData from "../../../../data/flight-data.json";
import Pagination from "../../../../components/Pagination";
import { filterFunction, sortHandler } from "../../../../functions";
import { sortList } from "../data";

type Props = {
  filterValueList: { id: number; values: number[] }[];
};

const Results = ({ filterValueList }: Props) => {
  const [data, setData] = useState(sampleData);
  const [activePage, setActivePage] = useState(1);
  const [sort, setSort] = useState(sortList[0]);

  //filter data-----------------------------
  useEffect(() => {
    if (filterValueList.length > 0) {
      let newData = { ...data };
      let newList = filterFunction(sampleData, filterValueList);
      newData.pricedItineraries = [...newList];
      setData(newData);
    } else {
      setData(sampleData);
    }
  }, [filterValueList]);
  //-----------------------------------------

  //sort------------------------
  useEffect(() => {
    let newData = { ...data };
    let newList = sortHandler(newData.pricedItineraries, sort);
    newData.pricedItineraries = [...newList];
    setData(newData);
  }, [sort]);

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
      <ResultsHeader data={data} sort={sort} setSort={setSort} />
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
        <Pagination
          activePage={activePage}
          setActivePage={setActivePage}
          totalPage={7}
        />
      </div>
    </div>
  );
};

export default Results;
