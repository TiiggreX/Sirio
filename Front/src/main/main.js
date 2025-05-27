// Dependencias 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './ini/inicio.jsx'
import Biblioteca from './biblio/biblioteca.jsx'
import { EdiciónRender } from './edit/edicion-render.jsx';
import Nav from './nav/navegation.jsx';
import { Perfil } from '../sub-page/perfil/perfil.jsx';
import { NavBarLateral } from './nav/sub-modules/nav-bar-lateral';
import BotonLateral from '../main/nav/sub-modules/boton-lateral';
import './main.css'

//
function Main(){
  return(
    <main>
      <BrowserRouter basename='/' >
        <Routes>
          <Route path='/' element={<> <BotonLateral /> <NavBarLateral /> <Nav /> <Inicio /> </>} />
          <Route path='/Biblioteca' element={<> <BotonLateral /> <NavBarLateral /> <Nav /> <Biblioteca /> </>} />
          <Route path='/Edicion/*' element={<> <BotonLateral /> <NavBarLateral /> <Nav /> <EdiciónRender /> </>} />
          <Route path='/Perfil/*' element={<> <Perfil /> </>} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default Main;