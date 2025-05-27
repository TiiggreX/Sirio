import { useState } from "react";
import { useEffect } from "react";
import { SearchBar } from '../sub-moduls/serchBar'

const datos = async ({ setIniText }) => {
      try {
        const respuesta = await fetch('http://localhost:5000/api/text');  //direccion de la informacion en el servidor backend
        const datos = await respuesta.json();  //convertir la respuesta a formato json, importante los parentesis
        setIniText(datos['content']); //actualizar los datos
      } catch (err) {
        throw err
      }
    }

function Inicio(){
  const [initext, setIniText] = useState('')

  useEffect(() => {
    datos({ setIniText });
  }, []); //array vacio para significado que se ejecuta una sola vez

  return(
    <section>
      <h2 className="IniHeader"  >Inicio</h2>
      <p className="initial-text" > { initext }  </p>
      <SearchBar />
    </section>
  );
}

export default Inicio;