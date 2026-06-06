//*Write a function a returns a second largest number in an array

function secondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let arr = [7, 8, 20, 42, 9, 0, 4];

let res = secondLargest(arr);
console.log(res);

//!Output => 20
