//* find the intersection of linked list

function intersectionLinkedList(headA , headB){
    let store = new Set()
    while(headB){
        store.add(headB)
        headB = headB.next
    }
    while(headA){
        if(store.has(headA)){
            return headA
        }
        headA = headA.next;
    }
    return null;
}

let headA = [4, 1, 8, 4, 5];
let headB = [5, 6, 1, 8, 4, 5];

let res = intersectionLinkedList(headA , headB);

console.log(res)

//!Output => 8