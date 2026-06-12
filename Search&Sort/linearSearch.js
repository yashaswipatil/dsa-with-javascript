//*print the index of a number in an array as target is given , if number not present then print -1

function linearSearch(arr , target){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}

let arr = [4,9,1,0,2]

let res = linearSearch(arr , 0)

console.log(res)