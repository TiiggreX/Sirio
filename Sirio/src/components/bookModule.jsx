/* eslint-disable react/jsx-no-comment-textnodes */
//Componente que sufrira reduccion de datos en pantalla para dejarlo para una posterior interfaz al abrir los libros

export const BookModule = ({ bookInfo }) => {
  //const imageDir = require('../../resours/ports/' + bookInfo.image)
  return(
    <div className='book' >
      <img /* src={imageDir} */ alt={bookInfo.image} className='book-image' />
      <div className='book-info' >
        <p className="book-name"> {'Nombre: ' + bookInfo.name} </p>
        <p className="book-gender"> {'Genero: ' + bookInfo.gender} </p>
        <p className="book-description" hidden > {'Descripción: ' + bookInfo.description} </p>
      </div>
    </div>
  );
}