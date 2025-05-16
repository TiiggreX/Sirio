import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './ini/inicio.jsx'
import Biblioteca from './biblio/biblioteca.jsx'
import { EdiciónRender } from './edit/edicion-render.jsx';
import Nav from './nav/navegation.jsx';
import { Perfil } from '../sub-page/perfil/perfil.jsx';
import { useState } from 'react'
import './main.css'

//
function Main(){
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('usuario')) || null;
  })

  return(
    <main>
      <BrowserRouter basename='/' >
        <Routes>
          <Route path='/' element={<> <Nav /> <Inicio /> </>} />
          <Route path='/Biblioteca' element={<> <Nav /> <Biblioteca /> </>} />
          <Route path='/Edicion/*' element={<> <Nav /> <EdiciónRender /> </>} />
          <Route path='/Perfil/*' element={<> <Perfil user={user} setUser={setUser} /> </>} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default Main;