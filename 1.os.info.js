const os = require("node:os");  //Es recomendable utilizar el prefijo node: para importar modulos nativos de node


console.log("nombre del sistema " + os.platform());
console.log("Arquitectura " + os.arch());
console.log("CPUs2 " + os.cpus());
console.log("MEMORIA " + os.freemem() / 1024 / 1024);
console.log("Version " + os.release());
console.log("Uptime " + os.uptime() / 60 / 60 / 24);
console.log(os.hostname());
console.log(os.type());
console.log(os.version());

