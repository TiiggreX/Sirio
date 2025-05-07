import './navegation.css'
import Button from "./sub-modules/boton-nav";
import BotonLateral from './sub-modules/boton-lateral';
import { NavBarLateral } from './sub-modules/nav-bar-lateral';
import { Link } from 'react-router-dom';
import '../../sub-page/perfil/perfil.css'

function Nav(){
  return(
    <nav className='nav-bar-system' >
      <Link to="/" ><Button text={'Inicio'} /></Link>
      <Link to="/Biblioteca" ><Button text={'Biblioteca'} /></Link>
      <Link to="/Edicion" ><Button text={'Edicion'} /></Link>
      <BotonLateral />
      <NavBarLateral />
    </nav>
  );
}

export default Nav;