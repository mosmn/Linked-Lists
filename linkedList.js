#!/usr/bin/env node

class Node {
    constructor(value = null, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
    }
}
  
class LinkedList {
    constructor() {
      this.list = null;
    }
  
    append(value) {
      const newNode = new Node(value);
  
      if (!this.list) {
        this.list = newNode;
      } else {
        let node = this.list;
        while (node.nextNode) {
          node = node.nextNode;
        }
        node.nextNode = newNode;
      }
    }

    prepend(value) {
        const newNode = new Node(value);
  
        if (!this.list) {
            this.list = newNode;
        } else {
            newNode.nextNode = this.list;
            this.list = newNode;
        }
    }

    size() {
        let count = 0;
        let node = this.list;
        while (node) {
            count++;
            node = node.nextNode;
        }
        return count;
    }

    head() {
        return this.list;
    }

    tail() {
        let node = this.list;
        while (node.nextNode) {
            node = node.nextNode;
        }
        return node;
    }

    at(index) {
        let node = this.list;
        for (let i = 0; i <= index; i++) {
            node = node.nextNode;
        }
        return node;
    }

    pop() {
        let node = this.list;
        while (node.nextNode.nextNode) {
            node = node.nextNode;
        }
        node.nextNode = null;
    }

    contains(value) {
        let node = this.list;
        while (node) {
            if (node.value === value) {
                return true;
            }
            node = node.nextNode;
        }
        return false;
    }

    find(value) {
        let node = this.list;
        for (let i = 0; i < this.size(); i++) {
            if (node.value === value) {
                return i;
            }
            node = node.nextNode;
        }
        return null;
    }
}
  
const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(9);
linkedList.append(3);
linkedList.append(4);
linkedList.prepend(0);

console.log(linkedList);
console.log(linkedList.size());
console.log(linkedList.tail());
console.log(linkedList.contains(39));
console.log(linkedList.find(1));

