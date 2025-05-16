import { Routes, Route } from 'react-router-dom'
import Login from "./login";
import Register from './register'
import PostLogin from './perfil-page';
import './perfil.css'

export const Perfil = ({ user, setUser }) => {

  if(user === null){
    return(
      <section id='perfil' >
        <Routes>
          <Route index element={<> <Login setUser={setUser} /> </>} />
          <Route path='Register' element={<> <Register setUser={setUser} /> </>} />
        </Routes>
      </section>
    )
  }else{
    return(
      <section id='perfil' >
        <Routes>
          <Route index element={<> <PostLogin setUser={setUser} user={user} /> </>} />
        </Routes>
      </section>
    );
  }
}