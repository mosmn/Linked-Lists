#!/usr/bin/env node

class Node {
    constructor(value = null, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
    }
}
  
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.nextNode = newNode;
        this.tail = newNode;
      }
    }
}
  
const linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(20);
linkedList.append(30);

console.log(linkedList);

