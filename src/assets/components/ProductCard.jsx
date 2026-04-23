import ComicsImgPlaceholder from "../img/ComicsPlaceholder.jpg";
export default function ProductCard({albo}) {
    return (
        <>
            
            <div key={albo.id} className="card m-2 col-2 bg-black text-bg-primary">
                {albo.advise && <button className="btn btn-primary advise">
                    {albo.advise}
                </button>
                }
                <img src={albo.thumb || ComicsImgPlaceholder} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-title">{albo.series || "DC series"}</p>
                </div>
            </div>
        </>
    );
}
