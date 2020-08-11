// funcion simple
function typeOne() {
    return true
}
console.log("typeOne", typeOne())
/* funcion simple con parametro */
function typeOneWithParam(param) {
    if (param) {
        return true
    } else {
        return false
    }
}
console.log("typeOneWithParam", typeOneWithParam("test"))
/* funcion como variable y simple con parametro */
const newFormat = function () {
    return true
}
console.log("newFormat", newFormat())
/* funcion como variable y simple con parametro */
const newFormatWithParam = function (param) {
    if (param) {
        return true
    } else {
        return false
    }
}
console.log("newFormatWithParam", newFormatWithParam("test"))
/* funcion de fecha/arrow function  */
const arrowFunction = () => true
console.log("arrowFunction", arrowFunction())
/* funcion de fecha/arrow function con parametro */
const arrowFunctionWithParam = (param) => param ? true : false
console.log("arrowFunctionWithParam", arrowFunctionWithParam("true"))
/**
 * nota los "arrow functions" no simpre es recomendable especialmente cuando se hereda en le DOM pasa mucho estos casos
 * para heredar se usa la palabra reservada "this"
 */