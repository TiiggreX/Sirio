const bcrypt = require('bcryptjs')

function ConstructUser( data ){
    //incriptar contraseña
    const hardpassword = bcrypt.hash( data.Password, 10 );
    //valores por default
    const defaultDescription = 'Aquí va su descripcion de su perfil'
    const defaultImage = '/'
    const defaultSocialNetworks = {}

    return user = {
        name: data.Name, 
        password: hardpassword, 
        mail: data.Email, 
        age: data.Age, 
        gender: data.Gender,
        description: defaultDescription,
        image: defaultImage,
        socialNetworks: defaultSocialNetworks
    }
}

module.exports = { ConstructUser }