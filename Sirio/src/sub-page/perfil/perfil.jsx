import { Routes, Route } from 'react-router-dom'
import Login from "./login";
import Register from './register'
import PostLogin from './perfil-page';
import { useState } from 'react'
import { EditarPerfil } from './edit-perfil';
//import { useContext } from 'react'
//import StateContext from '../../context'
import './perfil.css'

export const Perfil = () => {
  //const { user, setUser } = useContext(StateContext)
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('usuario')) || null;
  })

  if(user === null){
    return(
      <section id='perfil' >
        <Routes>
          <Route index element={<> <Login setUser={setUser} /> </>} />
          <Route path='Register' element={<> <Register setUser={setUser} /> </>} />
        </Routes>
      </section>
    )
  } else {
    return(
      <section id='perfil' >
        <Routes>
          <Route index element={<> <PostLogin setUser={setUser} user={user} /> </>} />
          <Route path='Editar' element={<> <EditarPerfil setUser={setUser} user={user} /> </>} />
        </Routes>
      </section>
    );
  }
}

