function Mostrar( id ){
  document.getElementById(id).hidden = false;
}

export const NavBarLateral = ({ title }) => {
  return(
    <div className='page' id='nav-container' >
      <div className="nav-container" >
        <nav className="nav-bar">
          <h1 className='title' > {title} </h1>
          <p className='text-adjacent' > "Un lugar donde soñar se hace con los ojos abiertos, el corazón en una mano y la otra lista para plazmar lo que tu alma te grita" </p>
          <ul className="list-container">
            <li className='object-list' ><button className='option-nav' 
              onClick={() =>
                Mostrar('perfil')
              }
            > Perfil </button></li>
            <li className='object-list' ><button className='option-nav' > Ajustes </button></li>
            <li className='object-list' ><button className='option-nav' > Actividad </button></li>
          </ul>
          <div className='users-terms' id='users-terms' >
            <a href="http://#" className='terms' > Politicas </a>
            <a href="http://#" className='terms' > Seguriadad </a>
          </div>
        </nav>
      </div>
    </div>
  );
}