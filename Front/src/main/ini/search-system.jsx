
function OpenClose(id){
  if(document.getElementById(id).hidden === true){
    document.getElementById(id).hidden = false;
  }
  else if(document.getElementById(id).hidden === false){
    document.getElementById(id).hidden = true;
  }
}

export const InitSearchSystem = () => {
  return(
    <section className='initSearchSystem' >
      <nav className='navSistem' >
        <ul className='listSistem' >
          <li className='searchOptions' ><button
            onClick={() =>
              OpenClose('searchBook')
            }
          > Busqueda </button></li>
        </ul>
      </nav>
    </section>
  );
}