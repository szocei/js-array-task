const array=[12,34,56,78,9,1,2,3,4,'a','b'];

function feladat2Array (arr , a){
    const exists = arr.some(item=>item===a);
    const index =arr.findIndex(item=>item===a);
    let allElementIsANumber = arr.every( item=> typeof item === 'number');
    const someElementIsANumber = arr.some(item => typeof item === 'number');
    const tipusok = arr.forEach(item => console.log(typeof item));
        
       
    console.log(exists);
    console.log(index);
    console.log(allElementIsANumber);
    console.log(someElementIsANumber);

    const objectKi={
        Exists: exists,
        Index: index,
        Allelementisnumber: allElementIsANumber,
        Someelementisnumber: someElementIsANumber,

    }

    console.log(objectKi);
    
};

feladat2Array(array,12);

console.log('-------------3.feladat------------');

const stringArray = ['1.','2.','3.','4.'];


function showContent(arr) {
 
 const temp = document.getElementsByClassName("t")[0];
     const item = temp.content.querySelector("li");
   for (let i = 0; i < arr.length; i++) {
       const a = document.importNode(item, true);
       a.textContent += arr[i];
        document.body.appendChild(a);
  }
}

showContent(stringArray);

