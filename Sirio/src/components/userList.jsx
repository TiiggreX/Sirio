import { SearchBar } from './serchBar'
import { useState, useEffect } from 'react'
import { ContentUser } from './userContainer'
//import { GetUsers } from '../api/get'

const GetUsers = async ({ setList, setRender}) => {
  try{
    const respuesta = await fetch('http://localhost:5000/api/user/showdata')
    if(!respuesta.ok){
      throw new Error('Error detectado: ', respuesta.status)
    }
    const data = await respuesta.json();
    setList( data )
    setRender( data )
  } catch (err) {
    throw err
  }
}

function UserList(){
  const [list, setList] = useState()
  const [render, setRender] = useState(null)

  useEffect(() => {
    GetUsers({ setList, setRender })
  }, [])

  return(
    <aside className='SearchBox' >
      <SearchBar setRender={setRender} list={list} />
      <div className='userList' >
        {render !== undefined && render !== null ? (render.map(render =>
          <ContentUser 
          key={render.IdUser} 
          nombre={render.Name} 
          edad={render.Age} 
          genero={render.Gender} 
          description={render.Description} />
        )) : (<div className='NotFound'> No hay Usuarios </div>)}
      </div>
    </aside>
  )
}

export default UserList