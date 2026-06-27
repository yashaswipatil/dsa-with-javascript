//*write a function to swap kTh node from the beginning and kth node from the end

function swapNodes(head , k){
    let slow = fast = head;

    for(let i = 0 ; i < k -1 ; i++){
        fast = fast.next;
    }

    let kStart = fast;

    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }

    let temp = kStart.val;
    kStart.val = slow.val;
    slow.val = temp;


    return head;
}

let head = [7, 9, 6, 6, 7, 8, 3, 0, 9, 5]

let res = swapNodes(head , 5);

console.log(res);

//!Output => [7,9,6,6,8,7,3,0,9,5]