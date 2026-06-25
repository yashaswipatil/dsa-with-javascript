//*write a function to rotate the linked list with k times

function rotate(head,k){
    let length = 0;
    let curr = head;
    while(curr){
        curr = curr.next;
        length++;
    }

    k = k % length;

    let slow = fast = head;

    for(let i = 0;i < k ; i++){
        slow = slow.next;
        fast = fast.next;
    }

    fast.next = head;
    let newHead = slow.next;
    slow.next = null;

    return newHead;
}

let head = [1,2,3,4,5]

let res = rotate(head, 2);

console.log(res);

//!Output => [4,5,1,2,3]