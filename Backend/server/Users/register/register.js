const db = require('../../dataBase/searchdataBase/searchDataBase.js')
const { PeticionDeDatos } = require('../../dataBase/searchInformation/searchInformation.js')
const { ConstructUser } = require('./constructUser.js')

async function Register(req, res){
    const data = req.body;
    try{
        db.get(PeticionDeDatos('*', 'Users', 'Mail', data.Email), async (err, row) => {
            if(err) throw err;

            if(row === null || row === undefined){
                //construir los datos del usuario
                const datos = ConstructUser(data)
                //guardar datos en la base de datos
                db.run(`INSERT INTO Users (name, Password, Mail, Age, Gender, Description, Image, SocialNetworks) VALUES (?,?,?,?,?,?,?,?)`,
                    [datos.Name, datos.password, datos.Email, datos.Age, datos.Gender, datos.description, datos.image, datos.socialNetworks],
                    async function (err) {
                    if(err) throw err;
                    //praparar la variable de retorno de datos al Front
                    db.get(PeticionDeDatos('*', 'Users', 'IdUser', this.lastID), async (err, user) => {
                        if(err) throw err;
                        //retornar la variable con la información del usuario 
                        return(
                            res.json( user )
                        )
                    })
                })
            } else {
                console.error('Correo no disponible...', row)
                return(res.json(null))
            }
        })
    }catch (err) {
        console.error("API /api/user/register error: ", err);
        res.status(500).json({error: 'Failed to insert user'});
    }
}

module.exports = Register