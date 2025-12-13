import { useState,useEffect } from "react";
import Footer from "./componens/footer";
import Navbar from "./componens/navbar";
import Card from "./componens/card";

export default function App(){
    const [characters, setCharacters] = useState([]);

    useEffect(()=>{
        async function load() {
            try{
                const res = await fetch("https://rickandmortyapi.com/api/character/?page=1");

                if(!res.ok){
                    throw new Error("Error: " + res.status);
                }

                const data = await res.json();
                setCharacters(data.results);

                for(let i = 0; i < data.results.length; i++){
                  
                    
                }


            }catch(error){
                console.error("Error: ", error);
            }
        }
        load();
    },[]);

   return (
  <div>
    <Navbar/>

        <main>
                <p>Characters: {characters.length}</p>

                <div className="flex gap-6 flex-wrap justify-center ">
                    {characters.map((c)=>{
                      return <Card key={c.id} c={c} />
                    })}
                </div>
        </main>
    

    <Footer/>
  </div>


);

}