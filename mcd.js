/**
* Scrivere qui il codice delle funzioni mcd(x, y) e mcdRecursive(x, y)
**/
function mcd (x,y) {
    while (y != 0 ) {
        let r = x % y
        x = y
        y = r
    }
    return x
}
console.log(mcd(8, 10))


// seconda parte


function mcdRecursive(x, y) {
    if (y === 0) return x
    else return  mcd( y, (x % y))
}
console.log(mcd(68, 20))
