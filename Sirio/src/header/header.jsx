//importar un icono para la pagina web ademas de otros puntos como layout del tema claro u oscuro
export const Header = () => {
  const title = document.getElementById('title').textContent
  return( 
    <header>
      <h1 className="Title" > 
        { title } 
      </h1>       
    </header> 
  );
}