const fs = require("node:fs");

// Callbacks "Funciones que se ejecutan cuando una tarea ha terminado"


// readFileSync devuelve un buffer, por lo que es necesario pasarlo a string con utf-8

console.log("leyendo el primer archivo...");

fs.readFile("text.txt", "utf-8", (err, text) => console.log(text));


console.log("Haciendo cosas mientras lee el primer archivo...");


console.log("leyendo el segundo archivo...");

fs.readFile("text2.txt", "utf-8", (err, text2) => console.log(text2));
