//*Write a function to find the length of the last word in the string

function lengthOfTheWord(s){
    let length = 0;
    let n = s.length - 1;

    while(n >= 0){
        if(s[n] === " "){
            n--;
        } else {
            break;
        }
    }

    while(n >= 0){
        if(s[n] !== " "){
            n--;
            length++;
        } else {
            break;
        }
    }

    return length;
}

function lengthOfTheWord2(s){
    let length = 0;
    let n = s.length - 1;

    while(n>=0){
        if(s[n] !== " "){
            length++;
        } else if(length > 0){
            break;
        }
        n--;
    }

    return length;
}

let s = "Hello World";
let res = lengthOfTheWord(s);
let res2 = lengthOfTheWord2(s);

console.log(res);

//!Output => 5