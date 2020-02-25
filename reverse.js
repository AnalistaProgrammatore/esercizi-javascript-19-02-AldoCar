/**
* Scrivere qui il codice dell'esercizio 2 del capitolo 4 di eloquentJS
* Vi ricordo che le funzioni DEVONO ESSERE PURE e implementate una in modo IMPERATIVO e una in modo DICHIARATIVO
**/

let result = arrayRev()

function arrayRev(){
    let arrayValue = [1, 2, 3, 4, 5]
    let arrayCopied = JSON.parse(JSON.stringify(arrayValue))
    
return arrayCopied.reverse()

}
console.log(result)


// seconda parte

let arrayValue = [1, 2, 3, 4, 5]

let reverseArrayInPlace = arrayValue.reduce((start, end) => ([end, ...start]), [])

console.log(reverseArrayInPlace)
