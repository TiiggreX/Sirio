
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