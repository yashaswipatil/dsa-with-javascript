//*Write a function that returns a smallest number in an array

function smallestNumber(arr) {
  let smallest = Infinity;
  for (let i = 0; i, arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

let arr = [4, 3, 0, 1, 31, 33, 45, 67];

let res = smallestNumber(arr);
console.log(res);

//!Output => 0
