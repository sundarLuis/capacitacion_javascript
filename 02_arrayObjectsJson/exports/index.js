/**
 * tipos de array
 */
let array = [1,2.3,true,"string"]
 /**
 * objeto
 */
 let objectTest = {
            id:2,
            name:"testName2",
            lastName:"lastName2",
            status:true,
        }

let arrayObjects = [
        {
            id:1,
            name:"testName1",
            lastName:"lastName1",
            status:false
        },
        {
            id:2,
            name:"testName2",
            lastName:"lastName2",
            status:true,
        }
    ]

/**
 * exportamos los array
 */
module.exports = {
    array:array, 
    objectTest,
    arrayObjects,// es la mismo que  arrayObjects : arrayObjects
}

