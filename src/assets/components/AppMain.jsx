import comics from "../script/comics.js";

export default function AppMain() {
    return (
        <main>
            <div className="container row justify-content-center align-items-center g-2 flex-wrap" >    
            {comics.map((albo) => (
                <div key={albo.id} className="card col-2">
                    <img src={albo.thumb} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{albo.title} {albo.price}</h5>
                    </div>
                </div>
            ))}                    
        </div>
        </main>
    );
}
