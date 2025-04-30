import { useState } from 'react'
import PreLogin from "../../sub-page/perfil/pre_login";
import PostLogin from '../../sub-page/perfil/post-login';

export const Perfil = () => {
  const [id, setId] = useState(null)
  const user ={
    name: '',
    image: '',
    decription: ''
  }
  
  if(id === null){return <PreLogin id={id} setId={setId} /> }
  else{return <PostLogin id={id}  user={user} /> }
}