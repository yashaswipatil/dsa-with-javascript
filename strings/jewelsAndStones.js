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

let jewels = "aA";
let stones = "aAAbbbb";

let res = jewelsAndStones(jewels,stones);

console.log(res);

//!Output => 3