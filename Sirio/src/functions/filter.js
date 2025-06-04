
//Hay que mejorar el sistema de Busqueda para que busque coincidencias en todo el texto y no solo desde el principio
export function filterItems(query, item) {
  if(query === '') {
    return item;
  }
  return item.filter((item) => item.Name.indexOf(query) === 0 );
}