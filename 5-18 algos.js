class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a stack operates on the principal of "First In, Last Out" like waiting in line for something
class SLStack{
    constructor() {
        this.top = null
    }

    // add a given value to your stack
    push(value){
        var node = new Node(value);
        node.next = this.top;
        this.top = node;
        return this;
    }
    
    remove and return the top value
    pop(value){
        if( this.top() === null ) {
            this.top = this.top;
            return this.top.pop(); 
    }
}
    

    // // return (don't remove) the top value of a stack
    // top() {
    //     // your code here
    // }

const sll = new SLStack();
sll.push(10)
console.log(sll)