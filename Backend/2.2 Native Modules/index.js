//Frivera 12.10.2023
const fs = require('fs');

// Ruta del archivo
const rutaArchivo = 'message.txt';

// Escribir en el archivo
fs.writeFile(rutaArchivo, 'Hola, este es un ejemplo de texto.', (err) => {
  if (err) throw err;

  console.log('Archivo escrito exitosamente.');

  // Leer el archivo
  fs.readFile(rutaArchivo, 'utf8', (err, data) => {
    if (err) throw err;

    console.log('Contenido del archivo:');
    console.log(data);
  });
});

// Ejemplo Curso
//const fs = require("fs");

//fs.writeFile("message.txt", "Hello Node", (err) => {
//  if (err) throw err;
//  console.log("The file has been saved!");
//});

//fs.readFile("message.txt", "utf8", (err, data) => {
//  if (err) throw err;
//  console.log(data);
//});
