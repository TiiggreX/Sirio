import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookModule } from "../components/bookModule";

export const CreateBook = ({book, elements, setElements }) => {
  const newElement = <BookModule key={elements.length} elements={book} />
  setElements([...elements, newElement]);
}

export const Create = ({ navigate = (useNavigate) }) => {
  return(
    <button id='add-button' 
      onClick={() => {
        navigate('/Edicion/CreateSeccion')
      }}
    > Crear </button>
  )
}

export const RenderMyBook = ({ render = [] }) => {
  const [wate, setwate] = useState([])

  useEffect(() => {
    setwate( Object.values( render ) )
  }, [])

  return(
    <>
      {wate !== null && wate !== undefined  ?
        (<>{ wate.map((wate, index) => 
          <BookModule 
            key={index}
            element={wate[index]}
          />
        ) }</>) : (<>NOT HAVE BOOKS</>)}
    </>
  )
}

/**/