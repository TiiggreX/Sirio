import { useNavigate } from "react-router-dom"

const Finish = ({navigate, setUser, user}) => {

  return(
    <>
      <button
        className="FinishButton"
        onClick={() =>
          Fetchingdatos({navigate, setUser, user})
        } >
        Guardar Cambios
      </button>
    </>
  )
}

const Gender = ({ user }) => {
  return(
    <select name="ChangeGender" id="changeGender" defaultValue={user.gender} >
      <option value="man"> Hombre </option>
      <option value="woman"> Mujer </option>
      <option value="other"> Otro </option>
    </select>
  )
}

const Fetchingdatos = ({navigate, setUser, user }) => {

  const dataChange = {
    id: user.id,
    newName: document.getElementById('changeName').value,
    newGender: document.getElementById('changeGender').value,
    newDescription: document.getElementById('changeDescription').value
  }
  fetch(`http://localhost:5000/api/user/update`,{
    method: 'PATCH',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify(dataChange)
  })
  user.name = dataChange.newName;
  user.gender = dataChange.newGender;
  user.description = dataChange.newDescription;
  setUser( user )
  localStorage.setItem('usuario',JSON.stringify(user))
  navigate('/Perfil', {replace: true})
}

export const EditarPerfil = ({ setUser, user }) => {
  const navigate = useNavigate();

  return(
    <section className="editPerfil" >
      <img src="/" alt="Imagen de perfil" className="changeImage" id='imagePerfilChanged' />
      <input type="text" name="ChangeName" id="changeName" placeholder="Nuevo Nombre" defaultValue={user.name} />
      <Gender user={user} />
      <textarea type="text" name="ChangeDescription" id="changeDescription" placeholder="Nueva Descripción" defaultValue={user.description} />
      <Finish user={user} setUser={setUser} navigate={navigate} />
    </section>
  )
}