import { useState } from 'react'
import './actividad.css'

const Terjeta = ({ user }) => {
  return(
    <div className='ActivitiInfoUser' >
      <p> {`Nombre: ${user.name}`} </p>
      <p> {`Edad: ${user.age}`} </p>
      <p> {`Genero: ${user.gender}`} </p>
      <p> {`Descripción: ${user.description}`} </p>
    </div>
  )
}

const Informacion = ({ user }) => {
  if(user === null) {
    return(
      <>
        <p> No ha iniciado seción aún </p>
      </>
    )
  } else {
    return(
      <div className='ActInfo' >
        <Terjeta user={user} />
      </div>
    )
  }
}

export const Activity = () => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('usuario')) || null 
  })

  return(
    <section>
      <h2> Actividad </h2>
      <Informacion user={user} />
    </section>
  )
}