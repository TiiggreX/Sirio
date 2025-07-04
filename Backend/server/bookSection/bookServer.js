const express = require('express')
const app = express()
const path = require('path')

const bookFolder = path.resolve(__dirname, '../../../Books');

//Creación de libros y actualización de los datos del autor
const { CreateBook } = require('./createBook/createBook')

app.patch('/api/book/create', async (req, res) => {
    await CreateBook(req, bookFolder);
})

//Exportar los libros del autor a la zona de edicion
const { SearchMyBook } = require('./myBook/searchMyBook');

app.post(`/api/book/editionZone`, async (req, res) => {
    const respuesta = await SearchMyBook( req )
    try{
        res.json({ respuesta })
    } catch (error) {
        console.log(' ERROR... ', respuesta)
        res.status(400).json({ error: error.message })
    }
    
})

module.exports = app