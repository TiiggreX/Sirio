const db = require("../searchdataBase/searchDataBase");

const sql = 'SELECT Users.IdUser, Name, Image, Description, Likes, Comentarios FROM Users, Activity WHERE Users.Iduser = Activity.IdUser'

async function ShowUsers(res){
    // Peticion de datos a la base de datos, en las tablas relacionadas a ka informacion del usuario
    db.all( sql , (err, row) => {
        if(err) throw err;
        return res.json( row )
    })
}

module.exports = ShowUsers