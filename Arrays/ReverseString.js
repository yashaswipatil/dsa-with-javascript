//*write a function to reverse a string - in-place

function reverseString(arr) {
  let len = arr.length;
  let halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i++) {
    let temp = arr[i];
    arr[i] = arr[len - 1 - i];
    arr[len - 1 - i] = temp;
  }
}

let arr = ["h", "e", "l", "l", "o"];

let res = reverseString(arr);

console.log(res);

//!Output => ["o", "l", "l" , "e" , "h"]
