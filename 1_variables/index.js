/**
 * var: scope global y funcion, modificable
 * let: scope en bloque, modificable
 * const: scope en bloque, no modificable
 */

const functions = require("./functions") // funciones que se vio en la capacitacion
var executeVar = functions.testVar()
let executeLet = functions.testLet()
/**
 * adicional tipo de strings
 */
//clasico
let string1 = "" + executeLet 
//este se puede usar por ejemplo en un etiqueta html cuando agregas codigo js
//<button onclick="myFunction('parametro de js en string es valido')">Click me</button>
let string2 = '' + executeLet
// bueno este tiene muchos casos tanto como para concatenar como para agregar html como string
//cuando trabajos con el DOM un ejemplo en la carpeta exampleStringTemplate
let string3 = `${executeLet}`
