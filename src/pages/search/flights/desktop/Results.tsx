import { useState } from "react";
import FlightSearchItem from "./FlightSearchItem";
import ResultsHeader from "./ResultsHeader";
import sampleData from "../../../../data/flight-data.json";

type Props = {};

const Results = (props: Props) => {
  const [data, setData] = useState(sampleData);
  console.log("----------------data------------------");
  console.log(sampleData);
  return (
    <div className="w-[calc(100%-306px)]">
      <ResultsHeader />
      {sampleData.pricedItineraries.map((item, index) => (
        <div className="w-full" key={item.id}>
          <FlightSearchItem />
        </div>
      ))}
    </div>
  );
};

export default Results;
