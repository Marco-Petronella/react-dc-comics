// import comics from "../script/comics.js";
import jumbo from "../img/jumbotron.jpg";
import ProductCard from "./ProductCard.jsx";
import AppFilters from "./AppFilters.jsx";
import filtering  from "../script/filtering.js";
import { useState } from "react";

export default function AppMain({ comics }) {
  const [comicsUnfiltered, setFilter] = useState(comics);
  const handleFilter = (filterValue) => {
    console.log(filterValue)
    if (filterValue === "ALL") {
      setFilter(comics);
    } 
    else if (filterValue == "Search") { 
      const filtered = filtering(comics, prompt("inserisci parola da cercare"));
      setFilter(filtered);
    } 
     else {
      const filtered = filtering(comics, filterValue);
      setFilter(filtered);
    }
  };

  return (
    <main>
      <div className="row align-items-md-stretch">
        <div className="col-12 jumbotron"></div>
      </div>
      
      <AppFilters onFilter={handleFilter} />
      <div
        className="row justify-content-center align-items-top mt-4 g-1 flex-wrap"
        id="cardContainer"
      >
        {comicsUnfiltered.map((albo) => (
          <ProductCard key={albo.id} albo={albo} />
        ))}
      </div>
    </main>
  );
}
