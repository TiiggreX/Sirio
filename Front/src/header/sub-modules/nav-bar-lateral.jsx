import { useState } from "react";
import { useEffect } from "react";

function Mostrar( id ){
  document.getElementById(id).hidden = false;
}

export const NavBarLateral = ({ title }) => {
  const [latText, iniLatText] = useState('')

  useEffect(() => {
      const datos = async () => {
        try {
          const respuesta = await fetch('http://localhost:5000/api/text');  //direccion de la informacion en el servidor backend
          const datos = await respuesta.json();  //convertir la respuesta a formato json, importante los parentesis
          iniLatText(datos['content2']); //actualizar los datos
        } catch (err) {
          throw err
        }
      }
      datos();
    }, []);

  return(
    <div className='page' id='nav-container' >
      <div className="nav-container" >
        <nav className="nav-bar">
          <h1 className='title' > {title} </h1>
          <p className='text-adjacent' > { latText } </p>
          <ul className="list-container">
            <li className='object-list' ><button className='option-nav' 
              onClick={() =>
                Mostrar('perfil')
              }
            > Perfil </button></li>
            <li className='object-list' ><button className='option-nav' > Ajustes </button></li>
            <li className='object-list' ><button className='option-nav' > Actividad </button></li>
          </ul>
          <div className='users-terms' id='users-terms' >
            <a href="http://#" className='terms' > Politicas </a>
            <a href="http://#" className='terms' > Seguriadad </a>
          </div>
        </nav>
      </div>
    </div>
  );
}