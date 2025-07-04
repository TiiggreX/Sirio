import { SearchBar } from './serchBar'
import { useState, useEffect } from 'react'
import { ContentUser } from './userContainer'
import { GetUsers } from '../api/get'

function UserList(){
  const [list, setList] = useState()
  const [render, setRender] = useState(null)
  const endpoint = 'http://localhost:5000/api/user/showdata'
  useEffect(() => {
    GetUsers({ setList, setRender, endpoint })
  }, [])

  return(
    <aside className='SearchBox' >
      <SearchBar setRender={setRender} list={list} />
      <div className='userList' >
        {render !== undefined && render !== null ? (render.map(render =>
          <ContentUser 
          key={render.IdUser} 
          nombre={render.Name} 
          description={render.Description} 
          likes={render.Likes} 
          comentarios={render.Comentarios} />
        )) : (<div className='NotFound'> No hay Usuarios </div>)}
      </div>
    </aside>
  )
}

export default UserList