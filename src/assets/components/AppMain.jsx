import comics from '../script/comics.js'

export default function AppMain() {
    return (
        <main>
            questo è il main
            
            {comics.map((albo) => (
               <div key={albo.id}>
                {albo.title}
                <p>costa {albo.price}</p>
                </div>
                
            ))}
        
            </main>
    )
}