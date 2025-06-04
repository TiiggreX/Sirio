import { useState } from 'react'
// Peticiones type GET to string endpoints 

const GetString = async ({ setText, endpoint}, paramt ) => {
  const [point, setPoint] = useState(() => {
    return endpoint || ''
  });
  try {
    const respuesta = await fetch(point);  //direccion de la informacion en el servidor backend
    const datos = await respuesta.json();  //convertir la respuesta a formato json, importante los parentesis
    if(paramt){
      setText(datos[paramt]);
    } else {
      setText(datos);
    }
  } catch (err) {
    throw err
  }
}
const GetUsers = async ({ setList, setRender}, endpoint ) => {
  const [point, setPoint] = useState(() => {
    return endpoint || ''
  });
  try{
    const respuesta = await fetch(point)
    if(!respuesta.ok){
      throw new Error('Error detectado: ', respuesta.status)
    }
    const data = await respuesta.json();
    setList( data )
    setRender( data )
  } catch (err) {
    throw err
  }
}

export { GetString, GetUsers }