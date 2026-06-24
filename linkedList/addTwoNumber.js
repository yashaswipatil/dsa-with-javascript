//* write a function to add two linked list which are in reverse order

function addNUmbers(l1,l2){
    let ans = new ListNode();
    let ansHead = ans;
    let carry = 0;
    while(l1 || l2 || carry){
        let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
        carry = Math.floor(sum / 10);
        let digit = sum % 10;

        let newNode = new ListNode(digit);
        ans.next = newNode;
        ans = ans.next;

        l1 = l1 && l1.next;
        l2 = l2 && l2.next;

    }

    return ansHead.next;
}

 let l1 = [2, 4, 3];
 let l2 = [5, 6, 4];

 let res = addNUmbers(l1, l2);

 console.log(res)

 //!Output => [7,0,8]