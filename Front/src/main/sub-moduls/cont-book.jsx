import { BookModule } from "./mod-book";

const book = {
  imag: 'IMG-20250323-WA0009.jpg',
  name: 'The Darkest Side of the Shadows',
  gender: 'Recuento de vida',
  description: 'Is the Place we never wanted to know but everybody live it sometime'
}
export const BookContainer = ({ sctName }) => {
  return(
    <section className='book-container' >
      <h3> {sctName} </h3>
      <div className='book-section' id='book-section' >
        <BookModule bookInfo={book} />
        <button id='add-button' > + </button>
      </div>
    </section>
  );
}