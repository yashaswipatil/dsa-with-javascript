//*check wether the given linked list is palindrome or not , if not return false

function palindromeLinkedList(head){
    //*middle
    let slow = fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    //*reverse
    let prev = null;
    while(slow){
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }


    //*compare two halves
    let first = head;
    let second = prev;
    while(second){
        if(first.val !== second.val){
            return false
        }
        first = first.next;
        second = second.next;
    }
    return true;

}