/**
* Scrivere qui il codice dell'esercizio 1 del capitolo 4 di eloquentJS
**/
function range (start, end){

    let array =[]
    
    if (start > 0) {
        for (let i = start; i <= end; i ++) {
          array.push(i)
        }
  } 
    else {
        for (let i = start; i >= end; i ++){
          array.push(i)
        }
  }
  return array
  
}

function sum(array) {
    let op = array.reduce(function(a, b){
        return a + b
    }, 0) 

}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

// non funziona del tutto, devo fixare
