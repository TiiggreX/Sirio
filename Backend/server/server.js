//#region: Dependencias
const express = require('express');
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 5000;
const text = require('../textOD/textServer'); //importar y correr el servidor para mandar el texto al Front
const appDb = require('../dataBase/dataBase')
//#endregion

//#region: Permisibilidad de comunicacion ( client - server )
app.use(express.json())
// Ajustes a las politicas cors para que el servidor localhost:3000 acceda a los datos
const corsOptions = {
    origin: 'http://localhost:3000',
    method: ['GET', 'POST', 'PUT', 'PATCH' , 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}
app.use(cors(corsOptions)); //aqui las politicas son agregadas
console.log('...Listo')
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

//#region: Lineas Finales
app.get('/', (req, res) => { // Aqui carga el mensage en la consola al momento que culmina el tiempo de carga de servidor y te avisa de que funciona
    res.send('Servidor corriendo correctamente')
});

app.listen(PORT, () => {  // Mensaje por defecto del servidor Backend
    console.log(`Servidor corriendo  en http://localhost:${PORT}`)
});
//#endregion