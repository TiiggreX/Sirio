import { useState } from 'react'
import { filterItems } from '../functions/filter'

export const SearchBar = ({ setRender, list }) => {
  const [query, setQuery] = useState('')
  
  function handleChange(e) {
    setQuery(e.target.value)
    const valor = filterItems(e.target.value, list)
    setRender(valor)
  }
  
  return(
    <input 
      type="search"  
      id="searchBook" 
      placeholder='busqueda' 
      value={query} 
      onChange={
        handleChange
      }
    />
  )
}