function Ocultar(){
  document.getElementById('perfil').hidden = true;
}

function PreLogin({ id , setId }){
  return(
    <div className='pre-login'>
      <button className='button-hidden'
        onClick={
          Ocultar
        }
      > x </button>
      <h2> Bienvenido </h2>
      <h3> a la pagina de inicio de sección de <strong> Sirio </strong> </h3>
      <input type="email" name="UserMail"  id="userMail" placeholder='correo de usuario' />
      <input type="password" name="UserPassword" id="userPassword" placeholder='contraseña' />
      
    </div>
  );
}

export default PreLogin;