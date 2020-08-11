/**
 * Nota existen varias paradigmas de programacion por mensionar:
 * programacion objectos
 * imperativa
 * funcional
 * declarativa
 * etc
 * javascrip puedes combinar con varias paradigma de programacion,
 * si tienen dudas pueden buscar mas info,
 * es importante saber en que caso de uso puedes hacer tal o cual tipo de programacion
 * para sacar el maximo provecho.
 */

/** lista/array de palabras/words  */
let words = ["hello", "world", "example", "words"]
/** programacion imperativa se basa en el que se hace */
function programacionImperativa() {
    console.log(" programacion imperativa ")
    /* for de toda la vida el basico */
    let newData = [] // se inicia un array basio
    for (let index = 0; index < words.length; index++) {
        //se le agrega cada word
        let word = words[index]
        newData.push(word)
    }
    console.log("newData",newData)
    let filterHello = []
    for (let word of words) {
        if (word == "hello") {
            filterHello.push(word)
        }
    }
    console.log("filterHello",filterHello)
}
function programacionFuncional() {
    /** programacion funcional se basa en el como se hace, suele ser mas descriptivo y leeible es de buenas practicas hacerlo en ingles, 
     * es recomendable hacer comentarios cuando haces funciones abstractas con eso quiero decir grandes y confusas a simple vista
     * ya que es probable que te olvides como lo hicistes y aparte que te ahorr tiempo si tienes que hacer cambios.
     * 
    */
    /* map, filter retorna un array con la condicion que les ponga y tiene parametros busquen mas ejemplos y caso de usos
    hay varios casos de usos intenten complicarse porque quieran o no javascript en la web siempre estara y es posible combinar
    map filter incluso
    */
    console.log(" programacion funcional ")
    /** metdodos nativo emascript 6 => javascript(moderno)
     * map: es un iterrador y retorna un array (.. mas)
     * filter:es un iterrador, filtrador y retorna un array (.. mas)
     */
    let newData = words.map(word => word)
    console.log("newData",newData)
    let filterHello = words.filter(word => word == "hello")
    console.log("filterHello",filterHello)
     //tambien puedes crear tus propias funciones siempre busca un nombre basado como se hace
     //por ejemplo hare una funcion que busque usuarios seria filterUsers, si fuera fitrar por id
     //filterUsersById
}
programacionImperativa() 
programacionFuncional()

//** reduce(recomiendo buscar info cuando terminen de entender map y filter y hay mas todavia) */