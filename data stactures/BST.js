class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
//binary search tree
class BST {
    constructor() {
        this.root = null;
    }
    insert(val) {
        const node = new Node(val);
        if(!this.root) {
            this.root = node;
            return this
        }
        var current = this.root;
        while(true) {
            if(current.val === val) return undefined;
            if(val < current.val) {
                if(!current.left) {
                    current.left = node;
                    return this;
                }
                current = current.left;
                
        }else {
            if(!current.right) {
                current.right = node;
                return this;
            }
            current = current.right;
        }
    }
    }
    find(val) {
        if(!this.root) return false;
        var current = this.root;
        while(current) {
            if(val === current.val) return true;
            if(val < current.val) {
                current = current.left;
            }else {
                current = current.right;
            }
        }
        return false;
    }
    //breadth first search
    BFS() {
        var queue = [],
             data = [],
             node = this.root;
        queue.push(this.root)
        while(queue.length) {
            node = queue.shift();
            data.push(node.val)
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data
    }
    //depth first PreOrder
    DFSPreOrder() {
        var data = [],
         current = this.root;
        function traverse(node) {
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
    //depth first postOrder
    DFSPostOrder() {
        var data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder() {
        var data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.val);
            if (node.right) traverse(node.right)
        }
        traverse(this.root);
        return data;
    }
}

var tree = new BST();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())
console.log(tree.DFSInOrder())