// import comics from "../script/comics.js";
import jumbo from "../img/jumbotron.jpg"
import ProductCard from "./ProductCard.jsx";

export default function AppMain({comics}) {
    // console.log({comics});
    return (
        <main>
            <div className="row align-items-md-stretch">
                <div className="col-12 jumbotron">
                </div>
            </div>
            <a className="btn btn-primary btn-sm fw-bold" href="#" role="button" id="currentButton">CURRENT SERIES</a>
            <div className="row justify-content-center align-items-top mt-4 g-1 flex-wrap" >    
            {comics.map((albo) => (
                <ProductCard key={albo.id} albo={albo} />
            ))}                    
        </div>
        </main>
    );
}
