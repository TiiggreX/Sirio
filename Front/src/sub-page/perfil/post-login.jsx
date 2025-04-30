function Ocultar(){
  document.getElementById('perfil').hidden = true;
}

function PostLogin({ id , user }){
  
  return(
    <div className='post-login'>
      <button className='button-hidden'
        onClick={
          Ocultar
        }
      > x </button>
      <img src={user.image} alt="imagen de perfil" id='user-image' />
      <p id='user-name' > { 'Nombre: ' + user.name} </p>
      <p id='user-description' > {'Descripción: ' + user.decription} </p>
    </div>
  )
}

export default PostLogin;