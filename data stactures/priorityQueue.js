class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}
class PrioirityQueue {
    constructor() {
        this.values = [];
    }
    inQueue(val, priority) {
        let node  = new Node(val, priority);
        this.values.push(node);
        this.bubbleDown();
    }
    bubbleDown() {
        let ind = this.values.length - 1;
        let element = this.values[ind];
        while(ind > 0) {
            let parentInd  = Math.floor((ind - 1) / 2),
            parent = this.values[parentInd];
            if(element.priority >= parent.priority) break;
            this.values[parentInd] = element;
            this.values[ind] = parent;
            ind = parentInd;
        }
    }
    // remove from the root
    deQueue() {
        let min = this.values[0];
        let end = this.values.pop();
        this.values[0] = end;
        this.shrink();
        return min;
    }
    shrink() {
        let ind = 0,
        element = this.values[0],
        length = this.values.length;
        while(true) {
            let leftInd = 2*ind+1,
            rightInd = 2*ind+2,
            left,
            right,
            swap = null;
            if(leftInd < length) {
                left = this.values[leftInd];
                if(left.priority < element.priority) {
                    swap = leftInd;
                }
            }
            if(rightInd < length) {
                right = this.values[rightInd];
                if(
                    (swap === null && right.priority < element.priority) ||
                    (swap !== null && right.priority < left.priority)
                ) {
                    swap = rightInd;
                }
            }
            if(swap === null) break;
            this.values[ind] = this.values[swap];
            this.values[swap] = element;
            ind = swap;
        }
    }
}

let queue = new PrioirityQueue();
queue.inQueue(41,4);
queue.inQueue(39,0);
queue.inQueue(33,1);
queue.inQueue(18,7);
queue.inQueue(27,4);
queue.inQueue(12,1);
queue.inQueue(55,3);
queue.deQueue();
console.log(queue.values)