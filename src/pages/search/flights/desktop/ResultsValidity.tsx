import React from "react";

type Props = {};

const ResultsValidity = (props: Props) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="text-[#464646] text-[14px]">مدت زمان اعتبار نتایج</div>
      <div className="flex items-center gap-x-1">
        <div className="text-[14px] text-[#1773dc]">14:35</div>
        <div className="w-[16px] h-[16px] border"></div>
      </div>
    </div>
  );
};

export default ResultsValidity;
