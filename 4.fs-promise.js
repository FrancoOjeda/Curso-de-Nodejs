
//Esto sirve para convertir modulos nativos de node sin promesas, a promesas
//const { promisify } = require("node:util");
//const readFilePromise = promisify(fs.readFile); 

const fs = require("node:fs/promises");

// Callbacks "Funciones que se ejecutan cuando una tarea ha terminado"
// readFileSync devuelve un buffer, por lo que es necesario pasarlo a string con utf-8

console.log("leyendo el primer archivo...");

fs.readFile("text.txt", "utf-8")
  .then((text) => console.log(text));


console.log("Haciendo cosas mientras lee el primer archivo...");


console.log("leyendo el segundo archivo...");

fs.readFile("text2.txt", "utf-8")
  .then((text) => console.log(text));
