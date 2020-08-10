const {array,arrayObjects} = require('./exports')

console.log("-- antes--")
// console.log(array)
// console.log(arrayObjects)
/**
 * metodo push: es para los array agregar un elemento 
 */
array.push("test")
arrayObjects.push({
    "id":3,
    name:"testName3",
    lastName:"lastName3",
    status:true,
})

console.log("-- despues--")
// console.log(array)
// console.log(arrayObjects)
console.log(arrayObjects[2])
let newElement = {"test":"hola"}
//concatenar o fusianar object
/**
 * los tre puntos "La sintaxis extendida o spread syntax" permite a
 *  un elemento iterable tal como un arreglo o cadena ser expandido en 
 * lugares donde cero o más argumentos (para llamadas de  función)
 */
let concat = {...arrayObjects[2],...newElement}

arrayObjects[2] = concat
console.log(arrayObjects)