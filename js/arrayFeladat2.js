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
