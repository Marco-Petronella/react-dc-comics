export default function ProductCard({albo}) {

return (
    
    <div key={albo.id} className="card m-2 col-2 bg-black text-bg-primary">
        <img src={albo.thumb} className="card-img-top" alt="..." />
        <div className="card-body">
                <p className="card-title">{albo.series}</p>
        </div>
    </div>
    
)
}