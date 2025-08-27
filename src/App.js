import FilterEvent from "./components/FilterEvent";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import { useState } from "react";
import SearchButton from "./components/SearchButton";

function App() {
  const [filterEvent, setFilterEvent] = useState("both");
  const [filterBySearch, setFilterBySearch] = useState("");

  return (
    <>
      <div className="d-flex container justify-content-between">
        <Navbar />
        <SearchButton searchByTitleAndTag={setFilterBySearch}  className = 'text-center'/>
      </div>

      <div className="container">
        <hr className="mt-0" />
        <FilterEvent onFilterChange={setFilterEvent} />
        <CardContainer
          dropDownFilter={filterEvent}
          searchByFilter={filterBySearch}
        />
      </div>
    </>
  );
}

export default App;
