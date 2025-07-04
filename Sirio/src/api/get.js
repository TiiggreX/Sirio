const GetString = async ({ setText, endpoint, paramt }) => {
  const respuesta = await fetch(endpoint);  //direccion de la informacion en el servidor backend
  const datos = await respuesta.json();  //convertir la respuesta a formato json, importante los parentesis
  if(paramt){
    setText(datos[paramt]);
  } else {
    setText(datos);
  }
}
const GetUsers = async ({ setList, setRender, endpoint }) => {
  const respuesta = await fetch(endpoint)
  if(!respuesta.ok){
    throw new Error('Error detectado: ', respuesta.status)
  }
  const data = await respuesta.json();
  setList( data )
  setRender( data )
}

const GetBooks = async () => {}

export { GetString, GetUsers }