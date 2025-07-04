
function PeticionDeDatos(elemnts, tabla, busq, value){
    return `SELECT ${elemnts} FROM ${tabla} WHERE ${busq} = "${value}"`
}

function CrearUsuario(datos){
    return ( `INSERT INTO Users 
        (name, Password, Mail, Age, Gender, Description, Image, SocialNetworks) VALUES ( 
        ${datos.Name}, 
        ${datos.password}, 
        ${datos.Email}, 
        ${datos.Age}, 
        ${datos.Gender}, 
        ${datos.description}, 
        ${datos.image},
        ${datos.socialNetworks} )`);
}

function ExportInfoUser( user ){
    if(user !== undefined && user !== null){
        return ({
            id: user.IdUser, 
            name: user.Name, 
            password: user.Password, 
            mail: user.Email, 
            age: user.Age, 
            gender: user.Gender,
            description: user.Description,
            socialNetworks: user.SocialNetworks
        })
    } else {
        return null
    }
}

module.exports = { PeticionDeDatos, ExportInfoUser, CrearUsuario }