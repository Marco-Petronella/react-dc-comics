import comics from "../script/comics.js";
import filtering from "../script/filtering.js";
import ProductCard from "./ProductCard.jsx";

export default function AppFilters({ onFilter }) {
  return (
    <>
      <div className="row justify-content-around align-items-top mt-4 g-1 flex-wrap">
        <a className="col-2 btn btn-primary btn-sm"
          onClick={() => { onFilter("ALL"); }} > All </a>
          <a className="col-2 btn btn-primary btn-sm"
          onClick={() => { onFilter("Batman"); }} > Batman </a>
          <a className="col-2 btn btn-primary btn-sm"
          onClick={() => { onFilter("Aquaman"); }} > Aquaman </a>
          <a className="col-2 btn btn-primary btn-sm"
          onClick={() => { onFilter("Search"); }} > Search </a>
        </div>
        </>
  );
}
