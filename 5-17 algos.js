class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLQueue{
    constructor() {
        this.head = null
        this.tail = null
    }

    // add a node with the given value to the queue
    enqueue(value) {
        // your code here
    }

    // remove and return the front value from the queue
    dequeue() {
        // your code here
    }

    //return true/false based on whether you find the given value in a queue
    contains(value) {
        // your code here
    }

    // remove the minimum value in the queue (remember your edgecases and pointers!)
    removeMin() {
        // your code here
    }

}
