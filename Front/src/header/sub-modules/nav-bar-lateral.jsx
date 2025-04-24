
export const NavBarLateral = ({ title }) => {
  return(
    <div className='page' id='nav-container' >
      <div className="nav-container" >
        <nav className="nav-bar">
          <h1 className='title' > {title} </h1>
          <ul className="list-container">
            <li className='object-list' ><button className='option-nav' > Perfil </button></li>
            <li className='object-list' ><button className='option-nav' > Ajustes </button></li>
            <li className='object-list' ><button className='option-nav' > Actividad </button></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}