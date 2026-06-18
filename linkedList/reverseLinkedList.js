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


function reverseLinkedList(head){
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

console.log(res);

//!Output => [5,4,3,2,1]