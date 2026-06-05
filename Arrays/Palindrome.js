//*write a function to check wether the given number is palindrome or not

function palindrome(x){
    if(x < 0) return false

    let xCopy = x;
    let rev = 0;
    while(x > 0){
        let rem = x % 10
            rev  = (10 * rev) + rem;
            x = Math.floor(x/10)
    }
    return rev === xCopy
}