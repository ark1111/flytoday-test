import React from "react";

type Props = {};

const fliterList = [
  {
    id: 1,
    title: "محدوده قیمت",
    type: "",
    items: null,
    min: null,
    max: null,
  },
  {
    id: 2,
    title: "تعداد توقف",
    type: "",
    items: null,
    min: null,
    max: null,
  },
  {
    id: 3,
    title: "زمان حرکت",
    type: "",
    items: null,
    min: null,
    max: null,
  },
  {
    id: 4,
    title: "کلاس پروازی",
    type: "",
    items: null,
    min: null,
    max: null,
  },
  {
    id: 5,
    title: "نوع پرواز",
    type: "",
    items: null,
    min: null,
    max: null,
  },
  {
    id: 6,
    title: "ایرلاین ها",
    type: "",
    items: null,
    min: null,
    max: null,
  },
];

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
        </div>
      ))}
    </div>
  );
};

export default FilterBox;
