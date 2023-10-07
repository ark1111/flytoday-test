import { useState } from "react";
import Filter from "./Filter";
import Results from "./Results";

type Props = {};

const DesktopSearchResults = (props: Props) => {
  const [filterValueList, setFilterValueList] = useState<
    { id: number; values: number[] }[]
  >([]);

  console.log("filterValueList")
  console.log(filterValueList);
  return (
    <div className="max-w-[1200px] min-h-[50vh] m-auto flex justify-between">
      <Filter
        filterValueList={filterValueList}
        setFilterValueList={setFilterValueList}
      />
      <Results filterValueList={filterValueList}/>
    </div>
  );
};

export default DesktopSearchResults;
