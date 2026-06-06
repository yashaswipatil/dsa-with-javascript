//*write a function to merge sorted Arrays

function mergeSortedArrays(nums1,m , nums2,n){
    let nums1Copy = nums1.slice(0,m);
    let p1 = 0;
    let p2 = 0;

    for(let i =0;i< m+n;i++){
        if(p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])){
            nums1[i] = nums1Copy[p1];
            p1++;
        } else {
            nums1[i] = nums2[p2];
            p2++;
        }
    }
}

let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;

let res = mergeSortedArrays(nums1,m,nums2,n)

console.log(res)

//!Output => [1,2,2,3,5,6]


//*Optimized Solution

function mergeSortedArr(nums1, m ,nums2,n){
    let p1 = m -1;
    let p2 = n -1;

    for(let i = m + m -1 ; i >= 0;i--){
        if(p1 < 0) break;
        if(p2 >= 0 && nums1[p1] > nums2[p2]){
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p1];
            p2--;
        }
    }
}
