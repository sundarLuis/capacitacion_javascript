/**
 * readline es una libreria nativa de nodejs
 *es para los inputs por consola
 */
const readline = require("readline");
/**
 * a diferencia de otros lenguajes se crea una interface
 */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/**
 * question es un metodo de createInterface para preguntar y obtener el resultado
 */
//primero se pregunta cual es tu nombre y con un collback mas adelante se vera que es
//pero es pasar una funcion anonima con parametro en este caso obtengo lo que el
//usuario inserto
rl.question("What is your name ? ", function(name) {
    //se pregunta donde vives? y igual que el anterior algo en destacar
    // que se esta haciendo en forma encascada eso quiere decir que mientras
    //mas preguntas mas a la derecha se ira
    rl.question("Where do you live ? ", function(country) {
        console.log(`${name}, is a citizen of ${country}`);
        rl.close();
    });
});
//evento close para cerrar la consola y mostrando un mensaje
rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
/**
 * nota hay libreria tambien para esto como prompt
 * link de ejemplo de esto mas completo:
 * https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/
 */