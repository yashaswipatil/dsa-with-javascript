//*write a function to delete the nth node from the end of the linked list;

function removeLinkedList(head, n){
    let sentinel = new ListNode(0,head);
    let length = 0;
    let first = head;
    while(first){
        length++;
        first = first.next;
    }

    let prev = sentinel;
    for(let i = 0 ; i < length -n ; i++){
        prev = prev.next;
    }
     prev.next  = prev.next.next;
     return sentinel.next;
}

function removeLinkedList2(head , n){
    let sentinel = new ListNode(0,head);
    sentinel.next = head;

    let first = sentinel;
    for(let i = 0 ; i < n;i++){
        first = first.next;
    }

    let second = sentinel;
    while(first.next){
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;

    return sentinel.next;
}


let head = [1, 2, 3, 4, 5];
let res = removeLinkedList(head , 2)
let res2 = removeLinkedList2(head,2)

console.log(res)

//!Output => [1,2,3,5]
