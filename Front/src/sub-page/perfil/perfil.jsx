import { Routes, Route } from 'react-router-dom'
import Login from "./login";
import Register from './register'
import './perfil.css'

export const Perfil = ({ id, setId }) => {
  
  if(id === null){
    return(
      <section id='perfil' >
        <Routes>
          <Route index element={<> <Login id={id} setId={setId} /> </>} />
          <Route path='Register' element={<> <Register id={id} setId={setId} /> </>} />
        </Routes>
      </section>
    )
  }
}