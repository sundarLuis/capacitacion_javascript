function consult() {
  
    return new Promise((resolve,reject) => {
        let captureData = []
        for (let index = 0; index < 10; index++) {
            setTimeout(function(){
                captureData.push(index) 
                console.log(captureData.length)
                /**
                 validando si es captureData llega a completarse
                 */                
                if(captureData.length === 10){
                    console.log("completado",)
                     resolve(captureData);
                }
            },1000)      
        }
    })
}
consult().then(res=>{
    console.log(res)

})

// var myPromise = new Promise((resolve, reject) => {
  
//     //Instrucciones que se van a ejecutar 
  
//    if(/* Termino correctamente */) {
//      resolve('Success!');
//    } else {
//       reject('Failure!');
//    }
//   });
  
//   myPromise.then(function() { 
//     /* hacer algo mas cuando la promesa sea resuelta */
//   }).catch(function() {
//     /* capturar el error */
//   })