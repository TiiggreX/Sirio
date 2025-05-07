
function Register({ id , setId }){
  
  const sendDats = async () => {
    const datos = {
          'Name': document.getElementById('userName').value,
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
      const dato = await response.json();
      setId(dato.id);
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