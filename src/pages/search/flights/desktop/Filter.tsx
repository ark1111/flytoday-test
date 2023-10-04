import React from "react";
import ResultsValidity from "./ResultsValidity";
import FilterBox from "./FilterBox";

type Props = {};

const Filter = (props: Props) => {
  return (
    <div className="w-[282px]">
      <ResultsValidity />
      <FilterBox/>
    </div>
  );
};

export default Filter;
