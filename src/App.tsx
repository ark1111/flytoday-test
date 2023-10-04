import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import FlightsSearchResluts from "./pages/search/flights";

function App() {
  return (
    <div className="w-full rtl">
      <Header />
      <SearchBox />
      <div className="w-full bg-[#f3f3f3] py-[32px]">
        <FlightsSearchResluts />
      </div>
    </div>
  );
}

export default App;
