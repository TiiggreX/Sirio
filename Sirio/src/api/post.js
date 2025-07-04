
export const PostMyBooks = async ({ user = {} , setElements = (() => {}) }) => {
  const respuesta = await new Promise((resolve, reject) => {
    try{
      resolve(
        fetch('http://localhost:5000/api/book/editionZone', {
          method: 'Post',
          headers: { 'Content-Type':'application/json' },
          body: JSON.stringify( user )
        })
      )
    } catch (err) {
      reject( err )
    }
  })
  
  if(! respuesta.ok ){
    throw new Error('Error detectado: ', respuesta.status)
  }
  const datos = (await respuesta.json())
  setElements( datos )
}