

/**
 * window.onload  se ejecuta al comenzar
 * 
 */
    window.onload = function () {
        console.log("window onload ejecutado")
        agregarTemplateHtmlAlContendorApp()
    }
/* variables globales */
    let helloWorld = "Hola Mundo"
    var plantillaHtml = `
        <div>
            <a href="#"> ${helloWorld}</a>
        </div>
        `
/**
 * DOM: Es la structura html en la manera mas simple de verlo
 * getElementById: captura por id en este caso nuestro contenedor <div id="app">
 * lo captura como elemento DOM eso quiere decir que se puede manipular tdo 
 * styles/css valor/value name/nombre etc
 * 
 */
    let contenedorApp = document.getElementById("app")
    console.log("contenedorApp capturando por id asi se muestra el DOM:",contenedorApp);

function agregarTemplateHtmlAlContendorApp(){    
    //innerHTML: es el metodo de js de lado del DOM es para insertar/agregar html
    contenedorApp.innerHTML = plantillaHtml;
}