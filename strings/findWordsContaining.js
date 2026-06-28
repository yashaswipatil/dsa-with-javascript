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

function findWordContaining2(words,x){
    let res = [];
    for(let i = 0 ; i < words.length ;i++){
        for(let j = 0; j < words[i].length ; j++){
            if(words[i][j] === x){
                res.push(i);
                break;
            }
        }
    }

    return res;
}

let words = ["leet", "code"];
let res = findWordContaining(words,"e");
let res2 = findWordContaining2(words, "e");
console.log(res);

//!Output => [0,1]
