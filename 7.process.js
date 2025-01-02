// Process es un objeto que proporciona informacion y control sobre el proceso actual

// Argumentos de entrada
// console.log(process.argv);

// Podemos controlar eventos del proceso
process.on('exit', () => {
  console.log('El proceso ha terminado')
})

// Podemos recuperar desde que carpeta se esta ejecutando el proceso
// Current working directory
console.log(process.cwd())

// Controlar el proceso y su salida
process.exit(0) // Salida exitosa

// process.exit(1) // Salida fallida
