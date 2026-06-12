//*print a function to find the fibonacci of n

function fibonacci(n){
    if( n <=1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

let n = 4;

let res = fibonacci(n);

console.log(res);

//!Output => 3