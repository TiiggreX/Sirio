import './navegation.css'
import { LinkButton } from '../../components/buttonNav';
import '../../main/pages/perfil/perfil.css'

function Nav(){
  return(
    <nav className='nav-bar-system' >
      <LinkButton text={'Inicio'} to={'/'} />
      <LinkButton text={'Biblioteca'} to={"/Biblioteca"} />
      <LinkButton text={'Edición'} to={"/Edicion"} />
    </nav>
  );
}

export default Nav;