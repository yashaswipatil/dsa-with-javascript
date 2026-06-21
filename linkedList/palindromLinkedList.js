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



function palindromeLinkedList2(head){
    let arr = [];
    let curr = head;
    while(curr){
        arr.push(curr.val);
        curr = curr.next
    }
    let left = 0; right = arr.length  - 1;
    while(left < right){
        if(arr[left++] !== arr[right--]){
            return false
        }

    }
    return true;
}

let head = [1, 2, 2, 1];

let res = palindromeLinkedList(head);
let res2 = palindromeLinkedList2(head);

console.log(res)
console.log(res2)


//!Output => true