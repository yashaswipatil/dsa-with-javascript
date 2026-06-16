//*Designed own linkedList

function Node(val){
    this.val = val;
    this.next = null;
}

function myLinkedList(val){
    this.head = null;
    this.size = 0;
}

function getIndex(index){
    if(index < 0 || index >= this.size) return -1;

    let curr = this.head;
    for(let i = 0 ; i < index ; i++){
        curr = curr.next;
    }
    return curr.val;
}

function addAtHead(val){
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}

function addAtTail(val){
    let newNode = new Node(val);
    if(this.head == null) return this.head = newNode;
    let curr = this.head;
    while(curr.next !== null){
        curr = curr.next
    }
    curr.next = newNode;

    this.size++;
}


function addAtIndex(index , val){
    let newNode = new Node(val);
    if(index < 0 || index > this.size) return;
    if(index === 0) return addAtHead(val);
    if(index === this.size) return addAtTail(val);

    let curr = this.head
    for(let i = 0 ; i < index - 1;i++){
        curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
}

function deleteAtIndex(index){
    if(index < 0 || index >= this.size) return;
    if(index === 0) return this.head = this.head.next;
    else {
         let curr = this.head;
         for (let i = 0; i < index - 1; i++) {
           curr = curr.next;
         }
         curr.next = curr.next.next;
         
    }
   this.size--;
}

let input = [
  "MyLinkedList",
  "addAtHead",
  "addAtTail",
  "addAtIndex",
  "get",
  "deleteAtIndex",
  "get",
];

let val = [[], [1], [3], [1, 2], [1], [1], [1]];


//!Output => [null, null, null, null, 2, null, 3]