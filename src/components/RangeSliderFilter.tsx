import { useState } from "react";
import { FliterListItemType } from "../types";
import { Slider } from "@mui/material";

type Props = {
  info: FliterListItemType;
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

const RangeSliderFilter = ({
  info,
  filterValueList,
  setFilterValueList,
}: Props) => {
  const [value, setValue] = useState<number[]>([
    info.min || 0,
    info.max || 1000000,
  ]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <div className="w-full mt-[40px] inline-block">
      <div className="w-full px-2">
        <Slider
          getAriaLabel={() => "price range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={(value) => `${value}`}
          min={info.min || 0}
          max={info.max || 1000000}
          sx={{ color: "#1773dc" }}
        />
      </div>
      <div className="w-full flex items-center justify-between mt-[7px]">
        <div className="text-[14px] text-[#464646]">
          {Intl.NumberFormat().format(value[1])} تومان
        </div>
        <div className="text-[14px] text-[#464646]">
          {Intl.NumberFormat().format(value[0])} تومان
        </div>
      </div>
    </div>
  );
};

export default RangeSliderFilter;
