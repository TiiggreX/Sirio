
export const Header = () => {
  const title = document.getElementById('title').textContent
  return( <header> <h1> { title } </h1> </header> );
}