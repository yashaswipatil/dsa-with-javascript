//*middle of the linked list

function middleLinkedList(head){
    let slow = head;
    let fast = head;
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
     return slow;
}

let head = [1, 2, 3, 4, 5];

//!Output => [3,4,5]