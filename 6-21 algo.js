class Bnode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }
}

min(){
    runner = this.root
    while(runner.left != null){
        runner = runner.left
    }
    return runner.value;
}

max(){
    runner.this.root
    while(runner.right != null){
        runner = runner.right
    }
    return runner.value;
}

height(runner = this.root){
    if (runner == null){
        return 0
    }
    lheight = this.height(runner.left)
    rheight = this.height(runner.right)
    if (lheight > rheight){
        return lheight +1
    }else{
        return rheight +1
    }
}

isBalanced()
    lcount = this.height(this.root.left)
    rcount = this.height(this.root.right)
    if(Math.abs(lcount-rcount)>1){
        return false
    }else{
        return true
    }
