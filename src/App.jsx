

import { useState,useEffect } from "react";

export default function App(){
    const [Characters, setCharacters] = useState([]);

    useEffect(()=>{
        async function load() {
            try{
                const res = await fetch("https://rickandmortyapi.com/api/character/?page=2");

                if(!res.ok){
                    throw new Error("Error" + res.status);
                }

                const json = await res.json();
                setCharacters(json.results);

                
            } catch(error){
                console.error("API CALL ERROR " + error);
            }
        }

        load();
    },[]);

    return (<div>
        <h1>Rick and Morty</h1>
        <p>Karakterek szama: {Characters.length}</p>
    </div>
    );
}