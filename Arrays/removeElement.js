//* write a function to remove element , here your given a value , you have to check wether the value exists if yes, then remove

function removeElement(nums , val){
    let x =0;
    for(let i =0; i< nums.length;i++){
        if(nums[i] !== val){
            nums[x] = nums[i]
            x = x+1;
        }
    }
    return x;
}

let nums = [3,2,2,3]

let res = removeElement(nums);

console.log(res)