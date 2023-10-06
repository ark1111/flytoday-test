import React from "react";
import DesktopSearchResults from "./desktop";
import MobileSearchResults from "./mobile";

type Props = {
  isMobile: boolean;
};

const FlightsSearchResluts = ({ isMobile }: Props) => {
  return (
    <div className="w-full">
      {isMobile ? <MobileSearchResults /> : <DesktopSearchResults />}
    </div>
  );
};

export default FlightsSearchResluts;
