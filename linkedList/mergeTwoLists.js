//*write a function to merge two linked list

function mergeList(list1,list2){
    let start = new ListNode();
    let curr = start;

    while(list1 && list2){
        if(list1.val < list2.val){
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }

    if(!list1){
        curr.next = list2
    }

    if(!list2){
        curr.next = list1;
    }

    return start.next;
}

let list1 = [1, 2, 4];;
let list2 = [1, 3, 4];

let res = mergeList(list1 , list2);

console.log(res)

//!Output => [1,1,2,3,4,4];