//Componente que sufrira reduccion de datos en pantalla para dejarlo para una posterior interfaz al abrir los libros
import { OpenEditZone } from "../functions/openEdit";

export function BookModule({ element = [] }){
  //const imageDir = require('../../resours/ports/' + elements.image)
  return(
    <div className='book' >
      <div id='book-link' /*onClick={() => {
        OpenEditZone(element)
      }}*/ >
        <img /* src={imageDir} */ alt={element.Name} className='book-image' />
      </div>
      <div className='book-info' >
        <p className="book-name"> {`Nombre: ${element.Name}`} </p>
        <p className="book-gender"> {`Genero: ${element.Gender}`} </p>
        <p className="book-description" > {`Descripción: ${element.Description}`} </p>
      </div>
    </div>
  );
}