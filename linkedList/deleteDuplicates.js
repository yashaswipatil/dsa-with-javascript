//*write a function to delete duplicates from the linked list

function deleteDuplicates(head){
    let curr = head;
    while(curr && curr.next){
        if(curr.val === curr.next.val){
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }
    return head;
}

let head = [1,1,2];

let res = deleteDuplicates(head);

console.log(res)

//!Output => [1,2]