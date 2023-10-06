import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import FlightsSearchResluts from "./pages/search/flights";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1200) {
      setIsMobile(true);
    }
  }, []);
  return (
    <div className="w-full rtl">
      <Header />
      <SearchBox />
      <div className="w-full bg-[#f3f3f3] py-[32px]">
        <FlightsSearchResluts isMobile={isMobile} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
