import React, { useState } from "react";

type Props = {
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number;
};

const Pagination = ({ activePage, setActivePage, totalPage }: Props) => {
  const [step, setStep] = useState(0);
  const changePage = (number: number): void => {
    setActivePage(step * 5 + number);
  };

  const nextPage = () => {
    if (activePage - step * 5 === 5) {
      setStep((oldValue) => oldValue + 1);
      setActivePage((oldPage) => oldPage + 1);
    } else {
      setActivePage((oldPage) => oldPage + 1);
    }
  };

  const previousPage = () => {
    if (activePage - step * 5 === 1) {
      setStep((oldValue) => oldValue - 1);
      setActivePage((oldPage) => oldPage - 1);
    } else {
      setActivePage((oldPage) => oldPage - 1);
    }
  };
  return (
    <div className="inline-flex items-center gap-x-[7px] select-none">
      {activePage !== 1 && (
        <div
          className="w-[35px] h-[35px] bg-[#fff] rounded flex items-center justify-center cursor-pointer"
          onClick={previousPage}
        >
          <img src="/icon/left-arrow.png" className="w-[7px] rotate-180" />
        </div>
      )}
      {[1, 2, 3, 4, 5].map((item, index) => (
        <React.Fragment key={item}>
          {item + step * 5 <= totalPage && (
            <div
              className={`w-[35px] h-[35px] bg-[#fff] rounded flex items-center justify-center text-[14px] text-[#464646] cursor-pointer ${
                activePage === item + step * 5 ? "bg-[#1773dc] text-[#fff]" : ""
              }`}
              onClick={() => changePage(item)}
            >
              {item + step * 5}
            </div>
          )}
        </React.Fragment>
      ))}
      {5 + step * 5 < totalPage && (
        <div
          className="w-[35px] h-[35px] bg-[#fff] rounded flex items-center justify-center cursor-pointer"
          onClick={nextPage}
        >
          <img src="/icon/left-arrow.png" className="w-[7px]" />
        </div>
      )}
    </div>
  );
};

export default Pagination;

// activePage, totalData, limit
