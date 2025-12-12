import { useEffect } from "react";
import { useState } from "react";

export default function App(){
  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    async function load(){
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    }
    load();
  },[]);
  return (<div>
    <p>Karakterek száma: {characters.length}</p>
  </div>);
}