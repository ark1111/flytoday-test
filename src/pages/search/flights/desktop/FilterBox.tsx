import { FliterListItemType } from "../../../../types";
import CheckboxFilter from "../../../../components/CheckboxFilter";
import { fliterList } from "../data";
import RangeSliderFilter from "../../../../components/RangeSliderFilter";
import { useState } from "react";

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

const FilterBox = ({ filterValueList, setFilterValueList }: Props) => {
  const [openBoxList, setOpenBoxList] = useState<number[]>([1, 2, 3, 4, 5, 6]);

  const openBoxHandler = (id: number) => {
    let newList = [...openBoxList];
    if (newList.includes(id)) {
      newList = newList.filter((item) => item !== id);
    } else {
      newList.push(id);
    }
    setOpenBoxList(newList);
  };

  return (
    <div className="w-full mt-[24px] bg-[#fff]">
      {/* ------header---------- */}
      <div className="w-full flex items-center justify-between py-[16px] px-[16px] border-b border-[#eeeeee]">
        <div className="text-[14px] text-[#464646] font-bold">فیلترها</div>
        <div className="text-[13px] text-[#1773dc] cursor-pointer">
          حذف فیلترها
        </div>
      </div>
      {/* ---------items------------ */}
      {fliterList.map((item, index) => (
        <div
          key={item.id}
          className="w-full py-[16px] px-[16px] border-b border-[#eeeeee]"
        >
          <div
            className="w-full flex items-center justify-between cursor-pointer"
            onClick={() => openBoxHandler(item.id)}
          >
            <div className="text-[14px] text-[#464646] font-bold">
              {item.title}
            </div>
            <img
              src="/icon/small-down.png"
              className={`w-[24px] h-[24px] -translate-x-[6px] transition-all duration-200 ${
                openBoxList.includes(item.id) ? "rotate-0" : "rotate-180"
              }`}
            />
          </div>
          {openBoxList.includes(item.id) && (
            <div className="w-full">
              {filterTypeHandler(item, filterValueList, setFilterValueList)}
            </div>
          )}
        </div>
      ))}
      <div className="w-full py-[16px] px-[16px]">
        <div className="w-full h-[40px] flex items-center gap-x-2 px-2 border border-[#e6e6e6] rounded">
          <img src="/icon/search-icon.png" className="w-[16px]" />
          <input
            type="text"
            className="flex-1 h-full border-none outline-none bg-transparent text-[14px]"
            placeholder="جستجوی شماره پرواز"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBox;

const filterTypeHandler = (
  info: FliterListItemType,
  filterValueList: { id: number; values: number[] }[],
  setFilterValueList: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        values: number[];
      }[]
    >
  >
) => {
  let newObj: { [key: string]: JSX.Element } = {
    checkbox: (
      <CheckboxFilter
        info={info}
        filterValueList={filterValueList}
        setFilterValueList={setFilterValueList}
      />
    ),
    range: (
      <RangeSliderFilter
        info={info}
        filterValueList={filterValueList}
        setFilterValueList={setFilterValueList}
      />
    ),
  };

  return newObj[info.type];
};
