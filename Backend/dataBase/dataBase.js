//#region: Dependencias
const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser');
const { error } = require('console');
const sqlite = require('sqlite3').verbose()

const db_path = path.resolve(__dirname, '../dataBase/Users.db');
const KEY = 'pwPqD9Rn';

app.use(bodyParser.json());
//#endregion

//#region: Abrir la base de datos y acceder a sus datos
const db = new sqlite.Database(
    db_path,
    sqlite.OPEN_READWRITE,
    (err) => {
    if(err) {console.log(err.message); throw err};
    console.log(db)
})

console.log('...base de datos encontrada')

const sql_create = `CREATE TABLE IF NOT EXISTS "Users" (
    "IdUser"	INTEGER,
    "Name"	TEXT,
    "Password"	TEXT,
    "Mail"	TEXT,
    "Age"	INTEGER,
    "Gender"	TEXT,
    PRIMARY KEY("IdUser" AUTOINCREMENT)
)`
db.run(sql_create, (err) => {
    if(err) throw err;
    console.log('...base de datos lista')
})
//#endregion

//#region: Seguridad de comunicación, autorización y encriptamiento
const AuthorizationToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) return res.sendStatus(401);

    jwt.verify(token, KEY, (err, user) => {
        if(err) return sendStatus(403);
        req.user = user;
        next();
    });
};

//#endregion

//#region: Sistema de registro de usuarios a la plataforma
app.post('/api/user/register', async (req, res) => {
    const data = req.body;
    const hardpassword = await bcrypt.hash(data.Password, 10);
    try{
        db.run(`INSERT INTO Users (name, Password, Mail, Age, Gender) VALUES (?,?,?,?,?)`,[data.Name, hardpassword, data.Email, data.Age, data. Gender], function (err) {
            if(err) throw err;
            res.json({
                id: this.lastID
            })
        })
    }catch (err) {
        console.error("API /api/user/register error: ", err);
        res.status(500).json({error: 'Failed to insert user'});
    }
})
console.log('...register listo')
//#endregion

//#region: Sistea de autenticación de usuarios y acceso a su perfil en la plataforma
app.post(`/api/user/login`, (req, res) => {
    const { Email , Password } = req.body;
    console.log( Email, ' ', Password );
    db.get(`SELECT * FROM Users WHERE Mail = ?`,
        [Email],
        async (err, user) => {
            if(err || !user){
                return res.status(400).json({ error: 'Credenciales invalidas' })
            };
            console.log('usuario correcto...');
            const validacion = await bcrypt.compare(Password, user.Password);
            if(!validacion){
                return res.status(400).json({ error: 'Credenciales invalidas' })
            }
            console.log('contraseña y validacion correctas...');
            const token = jwt.sign({ 
                id: user.IdUser, 
                name: user.Name, 
                password: user.Password, 
                mail: user.Email, 
                age: user.Age, 
                gender: user.Gender 
            }, KEY , {
                expiresIn: '1h'
            })
            res.json({ token })
        console.log({ token })
        }
    )
})
//#endregion

//#region: Cierre y exportacion
console.log('...usuarios listos')

module.exports = app
//#endregion