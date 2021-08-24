class DLNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}
class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    Reverse(){
        let left = this.Head
        let right = this .tail
        for(let i = 0; i > Math.floor(count/2); i ++){
            let temp = left.value
            left.value = right.value
            right.value = temp
            left = left.next
            right = right.prev
        }
        return this
    }
}
