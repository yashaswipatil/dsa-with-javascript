//*write a function that returns the largest element in an array

function largestElement(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let arr = [7, 10, 20, 100, 300, 500];
let res = largestElement(arr);
console.log(res);

//! Output = 500
