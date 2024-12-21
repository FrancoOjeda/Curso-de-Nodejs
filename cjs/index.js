// Variables globales de NodeJS
// window != globalThis
// Node no tiene window, tiene globalThis como variable global
// Debemos usar siempre globalThis en node, ya que en el navegador apunta a window
// mientras que en node, apunta a la variable global

//console.log(globalThis);

// Node utiliza un patron de diseño llamado "MODULO"
// Un modulo es un archivo que contiene una sola funcion
// que se exporta como un objeto

const { suma } = require("./sum");

console.log(suma(1, 2)); // 3
