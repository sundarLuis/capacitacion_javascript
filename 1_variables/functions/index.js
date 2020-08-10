//setTimeout => metodo de javascript para poner un tiempo de espera para ejecutar X codigo
function testVar(){
    console.log("-- testVar --")
    for(var i = 1; i < 4; i++){
       /*  setTimeout(
            function(){ */
                console.log("iterator -> var",i)
        /*     },1000 * i
        ) */
    }
    //console.log(i)
}
function testLet(){
    console.log("-- testLet --")
    for(let i = 1; i < 4; i++){
        /* setTimeout(
            function(){ */
                console.log("iterator -> let",i)
        /*     },1000 * i
        ) */
    }
    //console.log(i)
}

function testConst(){
    console.log("-- testConst --")
    const numero = 0
    //numero = 1 
    console.log("const numero",numero)
}

//testVar()
//testLet()
//testConst()

module.exports = {
    testVar,
    testLet,
    testConst
}
