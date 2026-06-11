//* print true if it is  the power of two  else print false

function powerOfTwo(n){
    if(n == 1) return true;
    else if((n % 2 !== 0) || n < 1) return false;
    return powerOfTwo(n/2)
}

let n = 16;

let res = powerOfTwo(n);

console.log(res);

//!Output => true