import React from 'react';
import Inicio from './ini/inicio.jsx'
import Biblioteca from './biblio/biblioteca.jsx'
import Edición from './edit/edición.jsx'
import './main.css'

function Main({ page }){
  if(page === 'Inicio'){
    return (
      <>
        <Inicio />
      </>
    );
  }
  else if(page === 'Biblioteca'){
    return (
      <>
        <Biblioteca />
      </>
    );
  }
  else if(page === 'Edicion'){
    return (
      <>
        <Edición />
      </>
    );
  }
}

export default Main;