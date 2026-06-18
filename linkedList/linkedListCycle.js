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

let head = [3, 2, 0, -4];

let res = linkedListCycle(head);

console.log(res)