class Node {
    constructor(value) {
        this.vlaue = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    push(val) {
        const node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        }else {
            const temp = this.head;
            this.head = node;
            this.head.next = temp;
        }
        return ++this.size;
    }
    pop() {
        const head = this.head;
        if(!head) return null;
        if(this.head ===  this.tail) {
            this.last = null;
        }
        this.head = this.head.next;
        this.size--;
        return head;
    }
}

const stack = new Stack();
stack.push(2)
stack.push(1)
stack.push(0)
stack.pop();
console.log(stack)