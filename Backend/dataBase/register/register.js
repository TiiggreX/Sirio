const bcrypt = require('bcryptjs')
const db = require('../searchdataBase/searchDataBase.js')
const { PeticionDeDatos } = require('../searchInformation/searchInformation')

async function Register(req, res){
    const data = req.body;
    try{
        db.get(PeticionDeDatos('*', 'Users', 'Mail', data.Email), async (err, row) => {
            if(err) throw err;

            if(row === null || row === undefined){
                //incriptar contraseña
                const hardpassword = await bcrypt.hash(data.Password, 10);
                //valores por default
                const description = 'Aquí va su descripcion de su perfil'
                const image = '/'
                const socialNetworks = {}
                //guardar datos en la base de datos
                db.run(`INSERT INTO Users (name, Password, Mail, Age, Gender, Description, Image, SocialNetworks) VALUES (?,?,?,?,?,?,?,?)`,
                    [data.Name, hardpassword, data.Email, data.Age, data.Gender, description, image, socialNetworks],
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