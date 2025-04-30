const express = require('express');
const fs = require('fs');
const path = require('path');

const textFilePath = path.join(__dirname, './textoPlano', 'text_1.txt') //Texto de la pagina de inicio
const textFilePath2 = path.join(__dirname, './textoPlano', 'text_2.txt') //Texto de la barra lateral

const text =  fs.readFileSync(textFilePath, 'utf-8', (err) => { if(err) throw err })  //Aqui carga el archivo de la ruta pre-cargada y gestiona los errores del archivo
const text_2 = fs.readFileSync(textFilePath2, 'utf-8', (err) => { if(err) throw err })
const dato = {
    content: text,
    content2: text_2
} //Aqui se convierte el archivo a formato .json y se pasan los valores a la variable final

module.exports = dato;