const path = require('path')
const sqlite = require('sqlite3').verbose()

const db = new sqlite.Database(
    path.join(__dirname, './../Users.db'),
    (err) => {
    if(err) {console.log('Error al abrir la base de datos: ',err.message); throw err};
    console.log('Base de Datos: ', db)
})

const sql_create = `CREATE TABLE IF NOT EXISTS "Users" (
    "IdUser"	INTEGER,
    "Name"	TEXT,
    "Password"	TEXT,
    "Mail"	TEXT,
    "Age"	INTEGER,
    "Gender"	TEXT, 
    "Description"     TEXT, 
    "Image"   BLOB, 
    "SocialNetworks" TEXT,
    PRIMARY KEY("IdUser" AUTOINCREMENT)
)`;
db.run(sql_create, (err) => {
    if(err) throw err;
})

module.exports = db