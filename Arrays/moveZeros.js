//*Write a function to move zeros in a sorted array

function moveZeros(nums) {
    let x = 0;
    for(let i =0;i< nums.length;i++){
        if(nums[i] !== 0) {
            nums[x] = nums[i];
            x++;
        }
    }

    for(let i = x;i < nums.length;i++){
       nums[i] = 0 
    }

}

let arr = [0, 1, 0, 3, 12];
let res = moveZeros(arr);

console.log(res);
