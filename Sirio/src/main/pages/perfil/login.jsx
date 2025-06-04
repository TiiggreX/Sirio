import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode'
import { LinkButton } from '../../../components/buttonNav'

//#region: Peticion POST
const datos = async ({ navigate, setUser }) => {
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
      const fallo = await respuesta.json()
      throw new Error(fallo.error || 'Credenciales incorrectas')
    }
    const { token } = await respuesta.json()
    const decoded = jwtDecode(token)
    const user = decoded.usuario;
    navigate('/Perfil', {replace: true});
    if(user){
      setUser(user)
      localStorage.setItem('usuario', JSON.stringify(user))
    }
  } catch (err) {
    throw err
  }
}
//#endregion

function Login({ setUser }){
  const navigate = useNavigate();

  return(
    <div className='login'>
      <div className='login-box' >
        <h3> Bienvenido </h3>
        <p> a la pagina de inicio de sección de Sirio </p>
        <input type="email" name="UserCheckMail"  id="userCheckMail"  placeholder='correo de usuario' required />
        <input type="password" name="UserCheckPassword" id="userCheckPassword"  placeholder='contraseña' required />
        <div className='loging-zone' >
          <LinkButton text={'Regitrarte'} to={'/Perfil/Register'} />
          <button
            onClick={() => datos({navigate, setUser})}
          > Inicia sesión </button>
        </div>
      </div>
    </div>
  );
}

export default Login;