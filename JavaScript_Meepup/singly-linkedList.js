class Node {
  constructor(data, nextN=null){
    this.data = data
    this.next = nextN
  }
}

class singlyLinkedList {
  constructor(){
    this.head =null
    this.tail = null
    this.length = 0 
  }

  push(val){

    let addNode = new Node(val)

    if(!this.head){
      this.head = addNode
    } else {
      this.tail.next = addNode
    }
    this.tail = addNode
    this.length++
  }

  pop(){
    if (!this.length) {
      return null;
    } else {

      let currentNode = this.head;
      let secondToLastNode = this.head;

      while (currentNode.next) {
        secondToLastNode = currentNode;
        currentNode = currentNode.next;
      }
      secondToLastNode.next = null;

      this.tail = secondToLastNode;

      this.length--;

      if (!this.length) {
        this.head = null;
        this.tail = null;
      }

      return currentNode;
    }
  }
 


  set(val, idx){
    if(!this.head || idx >= this.length){
      return null;
    }

    let current = this.head;
    let counter = 0;

    while(counter){
      counter++;
      current = current.next;

    }
    current.val = val
    return current;
  }
  print(){

  }
}

let list = new singlyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.set(5, 2)



console.log(list.head.next);


