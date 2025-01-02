const fs = require('node:fs/promises')
const path = require('node:path')
const folder = process.argv[2] ?? '.' // Usa el directorio actual si no se pasa argumento

async function ls (folder) {
  let files = []
  try {
    // Leer los archivos del directorio
    files = await fs.readdir(folder)
  } catch (error) {
    console.error(`No se pudo leer el directorio ${folder}`)
    console.error(error)
    process.exit(1)
  }

  // Mapear los archivos para obtener información detallada
  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file)
    try {
      const stats = await fs.stat(filePath) // Obtener información del archivo
      const isDirectory = stats.isDirectory()
      const fileType = isDirectory ? 'directory' : 'file'
      const fileSize = stats.size
      const fileModified = stats.mtime.toLocaleString() // Formatear fecha de modificación

      return `${fileType} ${file.padEnd(20)} ${fileSize} bytes ${fileModified}`
    } catch (error) {
      console.error(`No se pudo leer el archivo ${filePath}`)
      console.error(error)
      return null // Retornar null si falla
    }
  })

  // Resolver todas las promesas y filtrar errores
  const filesInfo = (await Promise.all(filesPromises)).filter(Boolean)

  // Mostrar la información
  filesInfo.forEach((fileInfo) => console.log(fileInfo))
}

// Ejecutar la función
ls(folder)
