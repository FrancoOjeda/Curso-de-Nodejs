const path = require("node:path");


// Barra separadora de carpetas segun SO
console.log(path.sep);

//Unir rutas con path.join()
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

// Obtener el nombre de un archivo y remover la extension
const base = path.basename(filePath, '.txt');
console.log(base);


// Obtener la extension de un archivo
const extension = path.extname(filePath);
console.log(extension);