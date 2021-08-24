moveMinToFront() {
    // your code here
    // #1 find the min: send runner through to identify the minimum value
    // #2: moving that value/node to the front
    // ** consider doing a swap vs. actually moving the nodes themselves
}

moveMaxToBack() {
    // your code here
}

const sll = new SLList();
sll.addToFront(3)
sll.addToFront(2)
sll.addToFront(1)
sll.addToBack(4)
sll.addToBack(5)
sll.contains(5) // prints true
sll.contains(6) // prints false
console.log("==========================================")
sll.printValues()
console.log("==========================================")
sll.removeFromFront()
sll.printValues()
console.log("==========================================")
sll.removeFromBack()
sll.printValues()
console.log("==========================================")
sll.moveMinToFront()
sll. moveMaxToBack()
