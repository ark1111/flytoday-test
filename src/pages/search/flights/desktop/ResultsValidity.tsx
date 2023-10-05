import CircularProgress from "@mui/material/CircularProgress";
import { useState, useEffect } from "react";

type Props = {};

const ResultsValidity = (props: Props) => {
  const totalTime = 3000;
  const [timer, setTimer] = useState(totalTime);

  useEffect(() => {
    let newInterval = setInterval(() => {
      setTimer((oldTimer) => (oldTimer > 0 ? oldTimer - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(newInterval);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-between">
      <div className="text-[#464646] text-[14px]">مدت زمان اعتبار نتایج</div>
      <div className="flex items-center gap-x-1">
        <div className="text-[14px] text-[#1773dc]">
          {Math.floor(timer / 60)}:
          {timer - Math.floor(timer / 60) * 60 < 10 && "0"}
          {timer - Math.floor(timer / 60) * 60}
        </div>
        <div className="w-[16px] h-[16px] flex items-center justify-center relative">
          <div className="w-[15.5px] h-[15.5px] border-[1px] border-[#d0d0d0] absolute z-0 rounded-full"></div>
          <CircularProgress
            variant="determinate"
            value={100 - (timer / totalTime) * 100}
            size={16}
            sx={{ color: "#1773dc" }}
            thickness={5}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultsValidity;
