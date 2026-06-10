//*  print n to 1 using recursion

function print(num){
    if(n == 1) return;
    console.log(num)
    num = num + 1;
    print(num)
}

let a = 5;

print(a)