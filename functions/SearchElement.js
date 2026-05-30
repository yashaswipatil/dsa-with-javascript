//* write a function that searches an element in an array and returns the index and if the element is not present than return -1

function searchElement(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}

let arr = [10, 20, 30, 50, 60, 88, 99];

let res = searchElement(arr, 50);

console.log(res);

//!Output = 3
