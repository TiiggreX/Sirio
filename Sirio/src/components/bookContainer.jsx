import {  useState } from "react";
import { BookModule } from "./bookModule";

export const BookContainer = ({ sctName }) => {
  const [elements, setElements] = useState([])

  const book ={
    image: '',
    name: '',
    gender: '',
    description: ''
  }

  const AddBook = () => {
    const newElement = <BookModule key={elements.length} bookInfo={book} />
    setElements([...elements, newElement]);
  }

  return(
    <aside className='book-container' >
      <h3> {sctName} </h3>
      <div className='book-section' id='book-section' >
        {elements}
        <button id='add-button' 
          onClick={ 
            AddBook
          }
        > + </button>
      </div>
    </aside>
  );
}