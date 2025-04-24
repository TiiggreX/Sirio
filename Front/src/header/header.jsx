import './header.css'
import Button from "./sub-modules/boton-header";
import BotonLateral from './sub-modules/boton-lateral';
import { NavBarLateral } from './sub-modules/nav-bar-lateral';

function Header({ title, page, setPage }){
  return(
    <header>
      <Button text={'Inicio'} page={page} setPage={setPage} />
      <Button text={'Biblioteca'} page={page} setPage={setPage} />
      <Button text={'Edicion'} page={page} setPage={setPage} />
      <BotonLateral />
      <NavBarLateral title={title} />
    </header>
  );
}

export default Header;