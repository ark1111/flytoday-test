import React from "react";
import ResultsValidity from "./ResultsValidity";
import FilterBox from "./FilterBox";

type Props = {
  filterValueList: { id: number; values: number[] }[];
  setFilterValueList: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        values: number[];
      }[]
    >
  >;
};

const Filter = ({ filterValueList, setFilterValueList }: Props) => {
  return (
    <div className="w-[282px]">
      <ResultsValidity />
      <FilterBox
        filterValueList={filterValueList}
        setFilterValueList={setFilterValueList}
      />
    </div>
  );
};

export default Filter;
