import fileUtils from './src/utils/fileUtils.js'
import transformUtils from './src/utils/transformUtils.js'
import apareo from './src/apareo.js'

// leo los 4 archivos a memoria
const archivos = [
'./in/10NumerosOrdenadosEntre1y50(setA).in',
'./in/10NumerosOrdenadosEntre1y50(setB).in',
'./in/imparesOrdenadosEntre1y999.in',
'./in/paresOrdenadosEntre2y1000.in'
]

const[a1, a2, a3, a4] = archivos.map(fileUtils.leer)

// preparo los 4 arrays a partir de los archivos leidos
const arr1 = transformUtils.stringEnArray(a1, ',')
const arr2 = transformUtils.stringEnArray(a2, ',')
const arr3 = transformUtils.stringEnArray(a3, ',')
const arr4 = transformUtils.stringEnArray(a4, ',')

const arrays = [arr1, arr2, arr3, arr4]

// combino los primeros dos arrays
const comb1 = apareo.combDosArr(arr1, arr2)
const comb1Texto = transformUtils.arrayEnString(comb1, ',')
fileUtils.escribir('./out/combinadoPropio.out', comb1Texto, true)

// combino los cuatro arrays
const comb2 = apareo.combNArr(arrays)
const comb2Texto = transformUtils.arrayEnString(comb2, ',')
fileUtils.escribir('./out/combinadoPropio2.out', comb2Texto, true)

