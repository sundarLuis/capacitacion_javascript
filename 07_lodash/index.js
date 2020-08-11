const _ = require('lodash')
const {array,object,book} = require("./helper")
/* map */
console.log(_.map(array))
 console.log(_.map(object))
console.log(_.map(book))
/* use */
// iterar array
_.map(array,function(i){
    //console.log(i)
})
const iterar = (i) => i
_.map(array,iterar)
// iterar objeto
_.map(object,function(i){
    //console.log(i)
})
// const iterar = (i) => console.log(i)
// _.map(object,iterar)
//_.map(book, b => console.log(b.lenguaje))

/* concat */
//console.log(_.concat(object,book[0]))
/* findIndex*/
// console.log(_.indexOf(array,3))
// console.log(_.findIndex(book,{"lenguaje":"java","edition":"tercera"} ))  
// console.log(_.filter(book,{"lenguaje":"java","edition":"tercera"} ))
// console.log(_.toUpper('--foo-bar--'))      
// console.log(_.toUpper('fooBar'))
// console.log(_.lowerCase('--Foo-Bar--'))
// console.log(_.lowerCase('fooBar'))
// console.log(_.cloneDeep(book))