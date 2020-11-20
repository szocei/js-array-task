'use strict'

const numericArray=[11,12,13,2,23,24,25,34,35,45];

function feladat1 (arr){
const megoldas=arr
.map(item=>item*1.27)
.reduce((previous,curent)=>previous+curent);

console.log(megoldas);
}

feladat1(numericArray);