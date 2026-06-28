//* write a function to find the words containing in the array of strings

function findWordContaining(words, x){
    let res = [];
    for(let i = 0; i  < words.length ; i++){
        if(words[i].includes(x)){
            res.push(i)
        }
    }

    return res;
}

let words = ["leet", "code"];
let res = findWordContaining(words,"e");
console.log(res);

//!Output => [0,1]
