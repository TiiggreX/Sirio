import { useNavigate } from "react-router-dom";

function IgualUser(user){
  return ({
    id: user[0],
    name: user[1],
    password: user[2],
    email: user[3],
    age: user[4],
    gender: user[5], 
    description: user[6],
    image: user[7], 
    socialNetworks: user[8]
  })
}
function Register({ setUser }){
  const navigate = useNavigate()
  const sendDats = async () => {
    const datos = {
          Name: document.getElementById('userName').value,
          Password: document.getElementById('userPassword').value,
          Email: document.getElementById('userMail').value,
          Age: document.getElementById('userAge').value,
          Gender: document.getElementById('userGender').value
    }
    try {
      const response = await fetch('http://localhost:5000/api/user/register',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(datos)
      })
      if(response !== null){
        const dato = await response.json();
        const user = Object.values(dato)
        alert( IgualUser(user) )
        setUser( IgualUser(user) )
        localStorage.setItem('usuario', JSON.stringify(IgualUser(user)))
        navigate('/Perfil', {replace: true});
      } else {
        alert('Credenciales incorretas')
      }
    } catch (err) {
      alert('Error en el intercambio de información.....');
      throw err;
    }
  }

  return(
    <div className='register'>
      <div className='register-box' >
        <h3> Crea tu cuenta </h3>
        <input type="text" name="UserName" id="userName" placeholder='nombre' />
        <input type="email" name="UserMail" id="userMail" placeholder='correo electronico' />
        <input type="number" name="UserAge" id="userAge" placeholder='edad' />
        <input type="text" name="UserPassword" id="userPassword" placeholder='contraseña' />
        <select name="UserGender" id="userGender" >
          <option className='genderOption' value="man">hombre</option>
          <option className='genderOption' value="woman">mujer</option>
          <option className='genderOption' value="other">otro</option>
        </select>
        <input type="checkbox" name="UserPolty" id="userPolty" placeholder='Acepta las politicas de la página' />
        <button
        onClick={() => sendDats()}
      > crear </button>
      </div>
    </div>
  )
}

export default Register;