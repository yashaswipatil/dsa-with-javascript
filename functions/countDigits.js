//*write a function that returns the count of digits in a number

function countOfDigits(num) {
    if(num ==0) return 1
  let count = 0;

  num = Math.floor(num)

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
let num = 2456;

let res = countOfDigits(num);

console.log(res);
