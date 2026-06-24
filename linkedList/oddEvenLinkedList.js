//* Write a function to order the linked list as first odd nodes followed by even nodes

function oddEvenList(head){
    let odd = head;
    let even = head.next;
    let evenHead = even;

    while(odd.next && event.next){
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;

    }
    odd.next = evenHead;

    return head;
}

let head = [1, 2, 3, 4, 5];

let res = oddEvenList(head);

console.log(res);

//!Output => [1,3,5,2,4]