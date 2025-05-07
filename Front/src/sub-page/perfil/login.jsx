import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode'

function Login({ id , setId }){
  const navigate = useNavigate();
  const datos = async () => {
    const inf = {
      Email: document.getElementById('userCheckMail').value,
      Password: document.getElementById('userCheckPassword').value
    }
    try {
      const respuesta = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(inf)
      })
      if(!respuesta.ok){
        alert(respuesta)
        const fallo = await respuesta.json()
        throw new Error(fallo.error || 'Credenciales incorrectas')
      }
      const { token } = await respuesta.json()
      const decoded = JSON.stringify(jwtDecode(token)).split(',')
      const user = JSON.parse(decoded);
      navigate('/Perfil');
      if(user.id){
        setId(user.id)
      }
    } catch (err) {
      throw err
    }
  }

  return(
    <div className='login'>
      <div className='login-box' >
        <h3> Bienvenido </h3>
        <p> a la pagina de inicio de sección de <strong> Sirio </strong> </ p>
        <input type="email" name="UserCheckMail"  id="userCheckMail"  placeholder='correo de usuario' />
        <input type="password" name="UserCheckPassword" id="userCheckPassword"  placeholder='contraseña' />
        <div className='loging-zone' >
          <Link to='/Perfil/Register' ><button> Registrate </button></Link>
          <button
            onClick={() => datos()}
          > Inicia sesión </button>
        </div>
      </div>
    </div>
  );
}

export default Login;