# Linked List

This is a simple implementation of a linked list in JavaScript, consisting of two classes: `Node` and `LinkedList`. The `LinkedList` class represents the full list, while the `Node` class represents individual nodes in the linked list.

## Node

### Properties
- `value`: The value contained in the node.
- `nextNode`: A reference to the next node in the list. Defaults to `null`.

## LinkedList

### Properties
- `list`: The head node of the linked list.

### Methods

- `append(value)`: Adds a new node containing the specified value to the end of the list.

- `prepend(value)`: Adds a new node containing the specified value to the start of the list.

- `size()`: Returns the total number of nodes in the list.

- `head()`: Returns the first node in the list.

- `tail()`: Returns the last node in the list.

- `at(index)`: Returns the node at the specified index.

- `pop()`: Removes the last element from the list.

- `contains(value)`: Returns `true` if the specified value is found in the list, otherwise returns `false`.

- `find(value)`: Returns the index of the node containing the specified value, or `null` if not found.

- `toString()`: Represents the linked list as a string in the format: `( value ) -> ( value ) -> ... -> null`

- `insertAt(value, index)`: Inserts a new node with the provided value at the specified index.

- `removeAt(index)`: Removes the node at the specified index.

## Example Usage

```javascript
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
```

This implementation provides basic functionality to manipulate and traverse a linked list. Feel free to modify or extend it to suit your specific needs.