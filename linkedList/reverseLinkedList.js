//*Write a function to reverse a linked List

function reverseLinkedList(head){
    let prev = null;
    let curr = head;

    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}


function reverseLinkedList2(head){
    let prev = null;
    let curr = head;

    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    head = prev;
    return head;
}

let head = [1, 2, 3, 4, 5];

let res = reverseLinkedList(head);
let res2 = reverseLinkedList2(head);

console.log(res);
console.log(res2)

//!Output => [5,4,3,2,1]