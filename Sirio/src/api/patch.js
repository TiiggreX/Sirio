
export const PatchCreateBook = ({ endpoint, User }) => {
    const data = {
        Name: document.getElementById('Nombre').value,
        Gender: document.getElementById('Genero').value,
        Description: document.getElementById('Descripción').value,
        IdUser: User.id
    }

    fetch( endpoint ,{
        method: 'PATCH',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify( data )
    })
}