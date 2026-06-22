//* write a function to remove a node from the linked list

function removeNode(head , val){
    let sentinal = new ListNode(0,head);
    let curr = sentinal;
    while(curr && curr.next){
        if(curr.next.val == val){
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return sentinal.next;
}


let head = [1, 2, 6, 3, 4, 5, 6];
let val = 6;

let res = removeNode(head , val);

console.log(res);

//!Output => [1, 2, 3, 4, 5]