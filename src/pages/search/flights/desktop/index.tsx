import React from "react";
import Filter from "./Filter";
import Results from "./Results";

type Props = {};

const DesktopSearchResults = (props: Props) => {
  return (
    <div className="max-w-[1200px] min-h-[50vh] m-auto flex justify-between">
      <Filter />
      <Results />
    </div>
  );
};

export default DesktopSearchResults;
