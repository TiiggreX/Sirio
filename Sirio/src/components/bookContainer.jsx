import {  useState } from "react";
import { CreateBook } from "../functions/bookWork";

export const BookContainer = ({ sctName }) => {
  const [elements, setElements] = useState([])

  const book ={
    image: '',
    name: '',
    gender: '',
    description: ''
  }

  return(
    <aside className='book-container' >
      <h3> {sctName} </h3>
      <div className='book-section' id='book-section' >
        {elements}
        <button id='add-button' 
          onClick={() => {
            CreateBook({ book, elements, setElements })
          }}
        > + </button>
      </div>
    </aside>
  );
}