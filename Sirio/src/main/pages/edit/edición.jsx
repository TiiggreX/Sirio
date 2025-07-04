import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Create, RenderMyBook } from '../../../functions/bookWork'
import { EditBook } from "./edicion/editbook";
import { PostMyBooks } from '../../../api/post'

function Edición(){
  const user = JSON.parse(localStorage.getItem('usuario'))
  const [elements, setElements] = useState( null )
  const navigate = useNavigate();

  useEffect(() => {
    PostMyBooks({ user, setElements })
  },[])

  return(
    <section id="Edicion" >
      <EditBook />
      <aside className='book-container' >
        <h3> Seccion de Edición </h3>
        <div className='book-section' id='book-section' >
          { elements !== null ? 
          ( <> 
              <RenderMyBook render={elements} /> 
            </> ) : ( <> ...Cargando </> ) }
          <Create navigate={navigate} />
        </div>
      </aside>
    </section>
  );
}

export default Edición;