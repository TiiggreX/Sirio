import { useState } from "react";
import { useEffect } from "react";
import UserList from "../../../components/userList";
//import { GetString } from '../../../api/get'

const GetString = async ({ setText }) => {
  try {
    const respuesta = await fetch('http://localhost:5000/api/text');  //direccion de la informacion en el servidor backend
    const datos = await respuesta.json();  //convertir la respuesta a formato json, importante los parentesis
    setText(datos['content']);

  } catch (err) {
    throw err
  }
}

function Inicio(){
  const [text, setText] = useState('')

  useEffect(() => {
    GetString({setText});
  }, []); //array vacio para significado que se ejecuta una sola vez

  return(
    <section className='Inicio' >
      <h2 className="IniHeader"  >Inicio</h2>
      <p className="initial-text" > { text }  </p>
      <UserList />
    </section>
  );
}

export default Inicio;