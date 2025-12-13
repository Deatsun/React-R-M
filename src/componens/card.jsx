export default function Card({c}){
    return(
        <div className="border-2  border-black rounded-xl my-5 bg-gray-400" >
            <img src={c.image} alt={c.name} className="w-full rounded-xl" />
            <div>
                <h1 className="text-center text-xl font-bold">{c.name}</h1>
                
                <div className="border-t-2  border-black">
                    <ul className="mx-2">
                        <li>Gender: {c.gender}</li>
                        <li>Status: {c.status}</li>
                        <li>Type: {c.type || "Unknown type"}</li>
                        <li>Location: {c.location.name}</li>
                    </ul>

                    <div className="flex justify-center my-2">
                              <button type="button" className="border border-black w-20 bg-orange-500 hover:bg-orange-600 hover:text-white" >Open</button>
                    </div>
                  
                </div>
                
            </div>
        </div>
    )
}