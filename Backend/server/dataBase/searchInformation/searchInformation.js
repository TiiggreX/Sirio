
function PeticionDeDatos(elemnts, tabla, busq, value){
    return `SELECT ${elemnts} FROM ${tabla} WHERE ${busq} = "${value}"`
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

module.exports = { PeticionDeDatos, ExportInfoUser }