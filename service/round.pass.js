
function idRandom (numRandom){
 const number = Math.random().toPrecision(1);
   let suma = 0;
   const id = []
      for(let i = 0; i < numRandom; i++){
        const num = number * 100
        suma = suma + num
        id.push(suma);
    }

const idFinal = id.join();
const idF = idFinal.replace(/,/g, '')
return idF
}


module.exports = idRandom;