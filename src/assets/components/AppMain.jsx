import comics from "../script/comics.js";
import jumbo from "../img/jumbotron.jpg"

export default function AppMain() {
    return (
        <main>
            <div className="row align-items-md-stretch">
                <div className="col-12 jumbotron">
                </div>
            </div>
            
            <div className="row justify-content-center align-items-top mt-4 g-1 flex-wrap" >    
            {comics.map((albo) => (
                <div key={albo.id} className="card m-2 col-2 bg-black text-bg-primary">
                    <img src={albo.thumb} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-title">{albo.series}</p>
                    </div>
                </div>
            ))}                    
        </div>
        </main>
    );
}
