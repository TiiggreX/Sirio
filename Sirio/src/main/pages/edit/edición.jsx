import { BookModule } from "../../../components/bookModule";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Edición(){
  const [elements, setElements] = useState([])
  const navigate = useNavigate();

  const [book ={
    image: '',
    name: '',
    gender: '',
    description: ''
  }, setBook] = useState();

  const CreateBook = () => {
    navigate('/Edicion/CreateSeccion')
    const newElement = <BookModule key={elements.length} bookInfo={book} />
    setElements([...elements, newElement]);
  }

  return(
    <section id="Edicion" >
      <h2>Edición</h2>
      <aside className='book-container' >
        <h3> Seccion de Edición </h3>
        <div className='book-section' id='book-section' >
          {elements}
          <button id='add-button' 
            onClick={ 
              CreateBook
            }
          > Crear </button>
        </div>
      </aside>
    </section>
  );
}

export default Edición;