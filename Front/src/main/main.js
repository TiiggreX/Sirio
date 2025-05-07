import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './ini/inicio.jsx'
import Biblioteca from './biblio/biblioteca.jsx'
import Edición from './edit/edición.jsx';
import Nav from './nav/navegation.jsx';
import { Perfil } from '../sub-page/perfil/perfil.jsx';
import { useState } from 'react'
import './main.css'
//
function Main(){
  const [id, setId] = useState(null)
  return(
    <main>
      <BrowserRouter basename='/' >
        <Routes>
          <Route path='/' element={<> <Nav /> <Inicio /> </>} />
          <Route path='/Biblioteca' element={<> <Nav /> <Biblioteca /> </>} />
          <Route path='/Edicion' element={<> <Nav /> <Edición /> </>} />
          <Route path='/Perfil/*' element={<> <Perfil id={id} setId={setId} /> </>} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default Main;