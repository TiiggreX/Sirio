import { createContext, useState } from 'react'

const mainContext = createContext({})
const StateContext = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('usuario')) || null;
  })

  return(
    <mainContext.Provider value={{
      user,
      setUser
    }} >
      { children }
    </mainContext.Provider>
  );
}

export default StateContext