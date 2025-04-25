import './header.css'
import Button from "./sub-modules/boton-header";
import BotonLateral from './sub-modules/boton-lateral';
import { NavBarLateral } from './sub-modules/nav-bar-lateral';
import { Perfil } from "./sub-modules/perfil";
import '../sub-page/perfil/perfil.css'

function Header({ title, page, setPage }){
  return(
    <header>
      <Button text={'Inicio'} page={page} setPage={setPage} />
      <Button text={'Biblioteca'} page={page} setPage={setPage} />
      <Button text={'Edicion'} page={page} setPage={setPage} />
      <BotonLateral />
      <div hidden id='perfil' > <Perfil /> </div>
      <NavBarLateral title={title} />
    </header>
  );
}

export default Header;