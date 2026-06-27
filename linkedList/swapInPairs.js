//*Write  a function to swap in pairs of linked list 

function swapPairs(head){
    if(!head || !head.next) return head;

    let dummy = new ListNode();
    dummy.next = head;

    let prev = dummy;

    while(prev.next  && prev.next.next){
        let first = prev.next;
        let second = first.next;


        first.next = second.next;
        second.next = first;
        prev.next = second;

        prev = first;

    }

    return dummy.next;


}


function swapPairs2(head){
    if(!head || !head) return head;

    let left = head;
    let right = head.next;

    left.next = swapPairs(right.next);
    right.next = left;


    return right;
}

let head = [1, 2, 3, 4];

let res = swapPairs(head);
let res2 = swapPairs2(head);

console.log(res);
console.log(res2)

//!Output => [2,1,4,3];