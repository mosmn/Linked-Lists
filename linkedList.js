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

    toString() {
        let node = this.list;
        let string = '';
        while (node) {
            string += `( ${node.value} ) ->`
            node = node.nextNode;
            if (!node) {
                string += ' null';
            }
        }
        return string;
    }

    insertAt(value, index) {
        const newNode = new Node(value);
        let node = this.list;
        for (let i = 0; i < index - 1; i++) {
            node = node.nextNode;
        }
        newNode.nextNode = node.nextNode;
        node.nextNode = newNode;
    }

    removeAt(index) {
        let node = this.list;
        for (let i = 0; i < index - 1; i++) {
            node = node.nextNode;
        }
        node.nextNode = node.nextNode.nextNode;
    }
}
  
const linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.prepend(5);

console.log(linkedList.toString()); // Outputs: ( 5 ) -> ( 10 ) -> ( 20 ) -> ( 30 ) -> null
console.log(linkedList.size()); // Outputs: 4
console.log(linkedList.head()); // Outputs: Node { value: 5, nextNode: Node { value: 10, nextNode: [Node] } }
console.log(linkedList.tail()); // Outputs: Node { value: 30, nextNode: null }
console.log(linkedList.at(2)); // Outputs: Node { value: 20, nextNode: Node { value: 30, nextNode: null } }
console.log(linkedList.contains(20)); // Outputs: true
console.log(linkedList.find(10)); // Outputs: 1

linkedList.pop();
console.log(linkedList.toString()); // Outputs: ( 5 ) -> ( 10 ) -> ( 20 ) -> null

linkedList.insertAt(15, 2);
console.log(linkedList.toString()); // Outputs: ( 5 ) -> ( 10 ) -> ( 15 ) -> ( 20 ) -> null

linkedList.removeAt(1);
console.log(linkedList.toString()); // Outputs: ( 5 ) -> ( 15 ) -> ( 20 ) -> null
