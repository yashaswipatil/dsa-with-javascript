//*write a function to find types of jewels that are stones

function jewelsAndStones(jewels,stones){
    let count = 0;
    for(let i = 0 ; i < stones.length;i++){
        for(let j = 0;j < jewels.length; j++){
            if(jewels[j] === stones[i]){
                count++;
                break;
            }
        }
    }

    return count;
}

function jewelsAndStones2(jewels,stones){
    let count = 0;
    let jSet = new Set();
    for(let i = 0; i < jewels.length;i++){
        jSet.add(jewels[i])
    }

    for(let i = 0; i < stones.length;i++){
        if(jSet.has(stones[i])){
            count++;
        }
    }

    return count;
}

let jewels = "aA";
let stones = "aAAbbbb";

let res = jewelsAndStones(jewels,stones);
let res2 = jewelsAndStones2(jewels, stones);

console.log(res);
console.log(res2);

//!Output => 3