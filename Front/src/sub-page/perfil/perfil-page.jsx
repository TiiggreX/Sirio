import { useState } from "react";

function PostLogin({ setUser , user }){
  const [elementos, setElementos] = useState([]);

  const AddRS = async () => { // A trabajar en el ingreso de valores metodo(POST)
    setElementos( <input tipe='text' required autoFocus placeholder='escriba el link' id='link' /> )
    document.getElementById('addRedesSociales').hidden = true;
  }
  //  const link = document.getElementById('link').value;
  //  fetch('http://localhost:5000/api/user/login/cdcec/scsdv', {
  //  method: 'PATCH', 
  //  headers: {'Content-Type': 'application/json'}, 
  //  body: JSON.stringify({ link })
  //})
  return(
    <div className='post-login' >
      <img src={'/'} alt="imagen de perfil" id='user-image' />
      <div className="inf-container" >
        <p id='user-name' > { `Nombre: ${user.name}`} </p>
        <p id='user-description' > {`Descripción: ${user.description}`} </p>
        <div className="link-section">
          <p> Redes Sociales </p>
          <ul className="list-sociales">
            { elementos }
            <button id="addRedesSociales" 
              onClick={() => {AddRS()}}
            > agregar red social </button>
          </ul>
        </div>
      </div>
      <button 
        className="end-sesion" 
        onClick={() => {
          setUser(null)
          localStorage.setItem('usuario', null)
        }}
      > cerrar sesión </button>
    </div>
  )
}

export default PostLogin;