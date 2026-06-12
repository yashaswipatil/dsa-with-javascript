//*write a function to find the index of target in an array using binary search else return -1

function binarySearch(nums,target){
    let left = 0;
    let right = nums.length - 1;

    while(right >= left){
        let middle = Math.floor((left+right) / 2);

        if(target === nums[middle]){
            return middle;
        } else if(target > nums[middle]){
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
};

let arr = [-1,0,3,5,9,12]

let res = binarySearch(arr , 9)

console.log(res)

//!Output => 4