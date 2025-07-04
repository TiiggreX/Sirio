import { useState } from "react";
import { useEffect } from "react";
import { LinkButton } from '../../components/buttonNav'
import { GetString } from '../../api/get'

const ExplorerList = () => {
  return(
    <ul className="list-container">
      <li className='object-list' ><LinkButton text={'Perfil'} to={'/Perfil'} /></li>
      <li className='object-list' ><LinkButton text={'Ajustes'} to={'/Ajustes'} /></li>
      <li className='object-list' ><LinkButton text={'Actividad'} to={'/Actividad' } /></li>
    </ul>
  )
}
const UserTerms = () => {
  return(
    <div className='users-terms' id='users-terms' >
      <LinkButton text={'Politicas'} to={'/Politicas'} />
      <LinkButton text={'Terminos'} to={'/Terminos'} />
    </div>
  )
}

export const NavBarLateral = () => {
  const [text, setText] = useState('')
  const endpoint = 'http://localhost:5000/api/text'
  const paramt = 'content2'

  useEffect(() => {
    GetString({setText, endpoint, paramt})
  }, []);

  return(
    <div className='page' id='nav-container' >
      <div className="nav-container" >
        <nav className="nav-bar">
          <h2 className='title' > Sirio </h2>
          <p className='text-adjacent' > { text } </p>
          <ExplorerList />
          <UserTerms />
        </nav>
      </div>
    </div>
  );
}