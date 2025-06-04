const express = require('express');
const app = express();
const db = require('./searchdataBase/searchDataBase')

const Segurity = require('./segurity/segurity')

//Enpoint para poder realizar la busqeda de los usuarios y que salga una parte de su informacion
const Show = require('./showusers/showusers')

app.get(`/api/user/showdata`, async (req, res) => {
    await Show(res)
})

// Cierre y exportacion
module.exports = app