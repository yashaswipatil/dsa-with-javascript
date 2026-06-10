//*print sum of first n numbers

function sum(n){
    if(n == 0) return;
    return n + sum(n-1)
}

//sum(5);