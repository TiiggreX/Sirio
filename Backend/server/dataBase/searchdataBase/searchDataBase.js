const path = require('path')
const sqlite = require('sqlite3').verbose()
const { Users, Activity, Book } = require('./comprobacion_db/show_db')

const db = new sqlite.Database(
    path.join(__dirname, './../Users.db'),
    (err) => {
    if(err) {console.log('Error al abrir la base de datos: ',err.message); throw err};
})

function CreateTables(sql_code){
    db.run(sql_code, (err) => {
    if(err) throw err;
})
}

const sql_Users = `CREATE TABLE IF NOT EXISTS "Users" (
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

const sql_Activity = `CREATE TABLE IF NOT EXISTS "Activity" (
	"IdUser"	INTEGER NOT NULL,
	"Likes"	INTEGER DEFAULT 0,
	"Comentarios"	INTEGER DEFAULT 0,
	PRIMARY KEY("IdUser"),
	FOREIGN KEY("IdUser") REFERENCES "Users"("IdUser")
);`

const sql_Book = `CREATE TABLE IF NOT EXISTS "Book" (
	"IdBook"	INTEGER NOT NULL,
	"Name"	TEXT,
	"Gender"	TEXT,
	"Description"	TEXT,
	"IdUser"	INTEGER NOT NULL,
	PRIMARY KEY("IdBook" AUTOINCREMENT),
	FOREIGN KEY("IdUser") REFERENCES "Users"("IdUser")
);`

CreateTables(sql_Users)
CreateTables(sql_Activity)
CreateTables(sql_Book)

module.exports = db