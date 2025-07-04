//#region: Dependencias
const express = require('express');
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 5000;
const text = require('./text/textServer'); //importar y correr el servidor para mandar el texto al Front
const appDb = require('./dataBase/dataBase')
const user = require('./Users/users')
const appBook = require('./bookSection/bookServer')
//#endregion

//#region: Permisibilidad de comunicacion ( client - server )
app.use(express.json())
// Ajustes a las politicas cors para que el servidor localhost:5173 acceda a los datos
const corsOptions = {
    origin: 'http://localhost:5173',
    method: ['GET', 'POST', 'PUT', 'PATCH' , 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}
app.use(cors(corsOptions)); //aqui las politicas son agregadas
//#endregion

//#region: Exportacion del servidor d texto
app.get('/api/text', (req, res) => { // Aqui carga la ruta del servidor ('/api/text') y cargas el archivo en el servidor 
    res.send(text);
}) 
console.log('...Listo')
//#endregion

//#region: Zona de trabajo y peticiones a la base de datos
app.use('/',appDb);
//#endregion

//#region: Trabajo con los datos de los usuarios
app.use('/',user);
//#endregion

//#region: Trabajo con con los libros
app.use('/', appBook)
//#endregion

//#region: Lineas Finales
app.get('/', (req, res) => { // Aqui carga el mensage en la consola al momento que culmina el tiempo de carga de servidor y te avisa de que funciona
    res.send('Servidor corriendo correctamente')
});

app.listen(PORT, () => {  // Mensaje por defecto del servidor Backend
    console.log(`Servidor corriendo  en http://localhost:${PORT}`)
});
//#endregion