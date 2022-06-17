class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        const node = new Node(val);
        if(!this.first) {
            this.first = node;
            this.last = node;
        }else {
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }
    dequeue() {
        if(!this.first) return null;
        const first = this.first;
        if(this.size === 1) {
            this.first = null;
            this.last = null;
        } else{
            this.first = this.first.next;
        }
        this.size--;
        return first;
    }
}

const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();
console.log(queue)