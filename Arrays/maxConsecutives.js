//* write a function to find max consecutive ones

function maxConsecutive(nums) {
  let currCount = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      currCount++;
    } else {
      maxCount = Math.max(currCount, maxCount);
      currCount = 0;
    }
  }
  return Math.max(currCount, maxCount);
}

let nums = [1, 1, 1, 1, 0, 1, 0, 1, 1, 0];

let res = maxConsecutive(nums);
console.log(res);
