/** Linked-List Implementation
 * A linked list is a data structure where the elements
 * are referred to as nodes, where each node contains data
 * and a link or pointer to the next node in the sequence.
 * 
 * Representation: [Node(head)] -> [Node] -> [Node(tail) -> null]
 */

// Class for the Linked-List
class LinkedList {
    constructor() {
        this.head = null;
    }

     // Add a new Node to the end of the list
    append(value) {
        let newNode = new Node(value);

        // If the list is empty add newNode is the head
        if (this.head === null) {
            this.head = newNode
        }
        // If the list is not empty start iterating from head
        // ... to find the last node
        else {
            let currentNode = this.head;
            // Use the nextNode property of the nodes
            while(currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            // Add the node to the end 
            currentNode.nextNode = newNode;
        }
    }

    // Add a new Node to the start of the list
    prepend(value) {
        let newNode = new Node(value);
        // Make the current head value the nextNode 
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    size() {
        let count = 0;

        if (this.head === null) {
            return 0;
        }
        else {
            let current = this.head;
            while(current !== null) {
                count++;
                current = current.nextNode;
            }
        }
        return count;
    }

    // Return the first and last Nodes
    first() { // Name conflict
        if (this.head === null) {
            return null;
        }
        return this.head.value;
    }

    last() {
        if (this.head === null) return null;

        let current = this.head;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        return current.value;
    }

    // Dealing with indices
    at(index) {
        if (this.head === null || index < 0) {
            return null;
        }
        let current = this.head;
        let check = 0;
        while(current.nextNode) {
            if (check === index) {
                return current.value;
            }
            current = current.nextNode;
            check++;
        }
    }

    insertAt(value, index) {
        if (index < 0) {
            return false;
        }

        let newNode = new Node(value);
        if (index === 0) {
            newNode.nextNode = this.head; 
            this.head = newNode;         
            return true; 
        }

        let current = this.head;
        let count = 0; 
        while (current !== null && count < index - 1) {
            current = current.nextNode;
            count++;
        }

        if (current === null) {
            console.error(`Error: Index ${index} is out of bounds.`);
            return false; 
        }

        newNode.nextNode = current.nextNode; 
        current.nextNode = newNode;         

        return true; 
    }

    removeAt(index) {
        if(index < 0 || index >= this.size()) return false;

        let nodeRemoved = null;
        if (index === 0) {
            nodeRemoved = this.head.value
            this.head = this.head.nextNode;
            return nodeRemoved;
        }

        let current = this.head;
        let count = 0;

        while(count < index - 1) {  // transerve before the target index
            current = current.nextNode;
            count++;
        }
        nodeRemoved = current.nextNode.value; 
        current.nextNode = current.nextNode.nextNode;

        return nodeRemoved;
    }

    // Remove the last element
    pop() {
        let listSize = this.size();

        if (listSize === 0) {
            return null;
        }

        let removedValue = null; // To store the value of the removed node

        if (listSize === 1) {
            removedValue = this.head.value; 
            this.head = null;               
            return removedValue;
        }

        let current = this.head;

        while (current.nextNode.nextNode !== null) {
            current = current.nextNode;
        }

        removedValue = current.nextNode.value; 
        current.nextNode = null;             

        return removedValue; 
    }

    // Check to see if the value is in the list
    contains(value) {
        let listSize = this.size();

        if (listSize === 0) return false;

        let current = this.head;
        let check = 0;

        while (check < listSize) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
            check++;
        }
        return false;
    }

    // Return the index of the value
    find(value) {
        let listSize = this.size();
        if (listSize === 0) return null;

        let current = this.head;
        let check = 0;

        while (check < listSize) {
            if (current.value === value) {
                return check;
            }
            current = current.nextNode;
            check++;
        }
        return null;
    }

    toString() {
        if (this.head === null) {
            return "( null )"; 
        }

        let nodeStrings = []; 
        let current = this.head; 

        // Loop through all nodes
        while (current !== null) { 
            nodeStrings.push(`( ${current.value} )`); 
            current = current.nextNode; 
        }

        // Join the node strings with " -> " and append the final " -> null"
        return `${nodeStrings.join(" -> ")} -> null`;
    }
}

// Class for the Nodes
class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export {LinkedList, Node};