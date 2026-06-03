//* write a function to reverse a integer

function reverseInteger(x){
    let xCopy = x;
    let rev = 0;
    x = Math.abs(x)

    while(x > 0){
        let last = x % 10;
        rev = (10*rev) + last;
        x = Math.floor(x/10);
    }

    let limit = Math.pow(2,31);
    if(rev < -limit  || rev > limit -1) return 0;

    return (nCopy > 0) ? -rev : rev;

}