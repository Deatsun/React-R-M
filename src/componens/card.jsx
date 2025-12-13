export default function Card({c}){
    return(
        <div className="border-2  border-black">
            <img src={c.image} alt={c.name} />
            <div>
                <h1 className="text-center text-xl font-bold">{c.name}</h1>
                
                <div className="border-t-2  border-black">
                    <ul>
                        <li>{c.gender}</li>
                        <li>{c.status}</li>
                        <li>{c.type || "Unknown type"}</li>
                        <li>{c.location.name}</li>
                    </ul>
                    <button type="button">Open</button>
                </div>
                
            </div>
        </div>
    )
}