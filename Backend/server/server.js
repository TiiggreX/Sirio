/*
const express = require('express');
const path = require('path');

const _dirname = path.resolve()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(_dirname, '../../Front/build')));

app.get('*', (req, res) => {
    res.sendFiles(path.json(_dirname, '../../Front/build', 'index.html'))
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo  en http://localhost:${PORT}`)
});
*/