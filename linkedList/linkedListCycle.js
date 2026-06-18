//*write a function to find that the linked list has a cycle or not .

function linkedListCycle(head){
    let seenNodes = new Set();
    let curr = head;

    while(curr){
        if(seenNodes.has(curr)){
            return true;
        }
        seenNodes.add(curr);
        curr = curr.next;
    }
    return false;
}

function linkedListCycle2(head){
    if(!head) return false;

    let slow = head;
    let fast = head.next;

    while(slow != fast){
        if(fast == null || fast.next == null){
            return false
        }

        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}


let head = [3, 2, 0, -4];

let res = linkedListCycle(head);
let res2 = linkedListCycle2(head);

console.log(res)
console.log(res2)