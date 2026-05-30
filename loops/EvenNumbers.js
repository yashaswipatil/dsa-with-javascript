//*write a loop to print all even numbers in an array

let arr = [2,3,4,5,6,7,8,9]
for(let i = 0; i < arr.length; i++){
    let rem = arr[i] % 2;
    if(rem == 0){
        console.log("it is a even number" , arr[i])
    }
}