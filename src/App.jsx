import { useState,useEffect } from "react";

export default function App(){
    const [Characters,setCharacters] = useState([]);


    useEffect(()=>{
          async function load(){
        try{
            
                const res = await fetch("https://rickandmortyapi.com/api/character/?page");
                if(!res.ok){
                    throw new Error("Error" + res.status);
                }

                const json = await res.json();
               setCharacters(json.results);

               console.log(json.results);
               
                



            }catch (error){
                console.error("Error:", error);
             } 
        }
        load();
    },[]);

    return (
        <div>
            <h1>R&M</h1>
            <p>Karakterek szama: {Characters.length}</p>
        </div>
    )
  
        
    }
