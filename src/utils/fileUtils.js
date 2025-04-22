import fs from 'fs'

/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
function leerArchivoComoString(ruta) {
    try {
        return fs.readFileSync(ruta, 'utf-8')
    } catch(error) {
        throw new Error('La ruta es inválida')
    }
   
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto 
 */
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
    if (fs.existsSync(ruta) || shouldCreateIfNotExists)
        fs.writeFileSync(ruta, texto, 'utf-8')
    else
        throw new Error(`Error: el archivo '${ruta}' no existe`)
}

// exportar ambas funciones
 export default {
    leer: leerArchivoComoString,
    escribir: escribirTextoEnArchivo
} 


