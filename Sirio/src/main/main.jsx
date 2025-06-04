// Dependencias 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/ini/inicio.jsx'
import Biblioteca from './pages/biblio/biblioteca.jsx'
import EdiciónRender from './pages/edit/edicion-render.jsx';
import Nav from './nav/navegation.jsx';
import { Perfil } from './pages/perfil/perfil.jsx';
import { Activity } from './pages/actividad/actividad.jsx'
import { Setings } from './pages/ajustes/ajustes.jsx';
import { NavBarLateral } from './nav/navBarLateral';
import { LateralButton } from '../components/buttonNav.jsx'
import './main.css'

const Index = () => {
  return <> <LateralButton /> <NavBarLateral /> <Nav /> <Inicio /> </>
}

const Librery = () => {
  return <> <LateralButton /> <NavBarLateral /> <Nav /> <Biblioteca /> </>
}

const Edicion = () => {
  return <> <LateralButton /> <NavBarLateral /> <Nav /> <EdiciónRender /> </>
}

function Main(){
  return(
    <main>
      <BrowserRouter basename='/' >
        <Routes>
          <Route path='/' element={<> <Index /> </>} />
          <Route path='/Biblioteca' element={<> <Librery /> </>} />
          <Route path='/Edicion/*' element={<> <Edicion /> </>} />
          <Route path='/Perfil/*' element={<> <Perfil /> </>} />
          <Route path='/Actividad' element={<> <Activity /> </>} />
          <Route path='/Ajustes' element={<> <Setings /> </>} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default Main;