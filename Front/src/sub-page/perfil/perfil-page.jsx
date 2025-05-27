import { Link } from 'react-router-dom'

const EndSesion = ({ setUser }) => {
  return(
    <button 
      className="end-sesion" 
      onClick={() => {
        setUser(null)
        localStorage.setItem('usuario', null)
      }}
    > Cerrar Sesión </button>
  )
}

const Editar = ({ setUSer }) => {
  return(
    <Link to={'Editar'} >
      <button
        className="edit-perfil"
      > Editar Perfil </button>
    </Link>
  )
}

const RedesSociales = ({ user }) => {
  const elementos = user.socialNetwork

  if(elementos){
    return(
      <div className="link-section">
        <ul className="list-sociales">
          Redes Sociales:
          { elementos }
        </ul>
      </div>
    )
  } else {
    return(
      <>
      </>
    )
  }
}

const Perfil = ({ setUser ,user }) => {
  return(
    <>
      <img src={'/'} alt="imagen de perfil" id='user-image' />
      <div className="inf-container" >
        <p id='user-name' > { `Nombre: ${user.name}`} </p>
        <p id='user-description' > {`Descripción: ${user.description}`} </p>
        <p id="user-gender"> {`Genero: ${user.gender}`} </p>
        <RedesSociales user={user} />
      </div>
      <EndSesion setUser={setUser} />
      <Editar setUSer={setUser} />
    </>
  )
}

function PostLogin({ setUser , user }){
  return(
    <div className='post-login' >
      <Perfil setUser={setUser} user={user} />
    </div>
  )
}

export default PostLogin;