const express = require('express');
const app = express();
const db = require('./searchdataBase/searchDataBase')

const Segurity = require('./segurity/segurity')

// Endpoint de registro de usuario
const Register = require('./register/register')

app.post('/api/user/register', async (req, res) => {
    await Register(req, res)
})

//Endpoint de autenticación de usuarios y acceso a su perfil en la plataforma
const Login = require('./login/login')

app.post(`/api/user/login`, async (req, res) => {
    await Login(req, res)
})

//Endpoint para modificar perfil de usuario
const Update = require('./update/update')

app.patch(`/api/user/update`, async (req, res) => {
    await Update(req, res)
})

// Cierre y exportacion
module.exports = app