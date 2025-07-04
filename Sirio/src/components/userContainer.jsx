import { Link } from "react-router-dom"

export const ContentUser = ({ nombre, description, likes, comentarios }) => {
  return(
    <span className='UserContaniner' >
      <img src={'/'} alt="imagen de perfil" />
      <div className='InfoContainer' >
        <p className='contentUserName' ><Link> { nombre } </Link></p>
        <p> likes: {likes} </p>
        <p> comentarios: {comentarios} </p>
        <p className="contentUserDescription" > { description } </p>
      </div>
    </span>
  )
}