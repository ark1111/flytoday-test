import { FliterListItemType } from "../../../../types";
import CheckboxFilter from "../../../../components/CheckboxFilter";
import { fliterList } from "../data";
import RangeSliderFilter from "../../../../components/RangeSliderFilter";

type Props = {};

const FilterBox = (props: Props) => {
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
          <div className="w-full flex items-center justify-between cursor-pointer">
            <div className="text-[14px] text-[#464646] font-bold">
              {item.title}
            </div>
          </div>
          <div className="w-full">{filterTypeHandler(item)}</div>
        </div>
      ))}
    </div>
  );
};

export default FilterBox;

const filterTypeHandler = (info: FliterListItemType) => {
  let newObj: { [key: string]: JSX.Element } = {
    checkbox: <CheckboxFilter info={info} />,
    range: <RangeSliderFilter info={info} />,
  };

  return newObj[info.type];
};
