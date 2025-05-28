import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom'

export const NavBarLateral = () => {
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
          <h2 className='title' > Sirio </h2>
          <p className='text-adjacent' > { latText } </p>
          <ul className="list-container">
            <li className='object-list' ><Link to='/Perfil' ><button className='option-nav' > Perfil </button></Link></li>
            <li className='object-list' ><Link to='/Ajustes' ><button className='option-nav' > Ajustes </button></Link></li>
            <li className='object-list' ><Link to='/Actividad' ><button className='option-nav' > Actividad </button></Link></li>
          </ul>
          <div className='users-terms' id='users-terms' >
            <Link className='terms' to='/Politicas' ><button> Politicas </button></Link>
            <Link className='terms' to='/Terminos' ><button> Terminos </button></Link>
          </div>
        </nav>
      </div>
    </div>
  );
}