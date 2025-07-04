import { useNavigate } from "react-router-dom";
import { Input, TextArea } from "../../../../components/input";
import { PatchCreateBook } from '../../../../api/patch'

function NewBook({ navigate, User }){
  const endpoint = 'http://localhost:5000/api/book/create'
  alert(User.id)
  PatchCreateBook({ endpoint, User })
  navigate('/Edicion')
}

const Button = ({ User }) => {
  const navigate = useNavigate();
  return(
    <button
      onClick={() =>
        NewBook({ navigate, User })
      }
    > Crear </button>
  )
}

export const Formulario = () => {
  const User = JSON.parse(localStorage.getItem('usuario'))

  return(
    <form className="Constructor">
      <Input text={'Portada'} type={'image'} src={'Portada'} />
      <div>
        <Input text={'Nombre'} type={'text'} />
        <Input text={'Genero'} type={'text'} />
        <TextArea text={'Descripción'} type={'text'} />
        <Button User={User} />
      </div>
    </form>
  )
}