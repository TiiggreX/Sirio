import { InitSearchSystem } from "./search-system";
import { useState } from "react";
import { useEffect } from "react";

function Inicio(){
  const [initext, setIniText] = useState('')

  useEffect(() => {
    const datos = async () => {
      try {
        const respuesta = await fetch('http://localhost:5000/api/text');  //direccion de la informacion en el servidor backend
        const datos = await respuesta.json();  //convertir la respuesta a formato json, importante los parentesis
        setIniText(datos['content']); //actualizar los datos
      } catch (err) {
        throw err
      }
    }
    datos();
  }, []); //array vacio para significado que se ejecuta una sola vez

  return(
    <section>
      <InitSearchSystem />
      <h2>Inicio</h2>
      <input type="search" name="SearchBook" id="searchBook" placeholder='busqueda de libros' />
      <p className="initial-text" > { initext }  </p>
    </section>
  );
}

export default Inicio;