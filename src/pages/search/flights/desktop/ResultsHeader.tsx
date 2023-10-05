import { useState } from "react";
import { sortList } from "../data";
import { sortItem } from "../../../../types";

type Props = {};

const ResultsHeader = (props: Props) => {
  const [sort, setSort] = useState(sortList[0]);
  const [showSortList, setShowSortList] = useState(false);

  const showListHandler = () => {
    setShowSortList((oldValue) => !oldValue);
  };

  const changeSort = (item: sortItem) => {
    setSort(item);
  };

  const hideSortList = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setShowSortList(false);
  };
  return (
    <div className="w-full">
      <div className="text-[20px] text-[#464646] font-bold">
        بلیط هواپیمای تهران به استانبول
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="text-[14px] text-[#464646]">
          27 پرواز یافت شد . سه‌شنبه، 12 اردیبهشت 1400
        </div>
        <div className="flex items-center gap-x-[14px]">
          <div className="text-[14px] text-[#8d8d8d]">مرتب‌سازی:</div>
          <div
            className="w-[155px] h-[40px] flex items-center justify-between rounded border border-[#eeeeee] bg-[#fff] px-2 cursor-pointer relative"
            onClick={showListHandler}
          >
            <div className="text-[14px] text-[#464646]">{sort.title}</div>
            <img
              src="/icon/small-down.png"
              className={`w-[24px] h-[24px] -translate-x-[6px] transition-all duration-200 rotate-180`}
            />
            {showSortList && (
              <div
                className="w-screen h-screen fixed top-0 left-0 bg-transparent z-40"
                onClick={(e) => hideSortList(e)}
              ></div>
            )}
            <div className="w-full bg-[#fff] rounded shadow-sm absolute left-0 top-[45px] z-50">
              {showSortList &&
                sortList.map((item) => (
                  <div
                    key={item.id}
                    className={`w-full p-2 text-[14px] text-[#464646] cursor-pointer hover:text-[#1773dc] hover:bg-[#e1effc] ${
                      sort.id === item.id ? "bg-[#e1effc]" : ""
                    }`}
                    onClick={() => changeSort(item)}
                  >
                    {item.title}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsHeader;
