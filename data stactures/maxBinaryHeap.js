//max binary heap
class MBH {
    constructor() {
        this.values = [];
    }
    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }
        bubbleUp(){
            let ind = this.values.length - 1;
            const element = this.values[ind];
            while(ind > 0){
                let parentind = Math.floor((ind - 1)/2);
                let parent = this.values[parentind];
                if(element <= parent) break;
                this.values[parentind] = element;
                this.values[ind] = parent;
                ind = parentind;
            }
        }
        extractMAx() {
            let max = this.values[0]
            const end = this.values.pop();
            this.values[0] = end;
            this.shrinkDown()
            return max;
        }
        shrinkDown() {
            let ind = 0,
            length = this.values.length,
            element = this.values[0];
            while(true) {
                let leftind = 2 * ind + 1,
                rightind = 2 * ind +2;
                let left, right;
                let swap = null;
                if(leftind < length) {
                    left = this.values[leftind];
                    if(left > element) {
                    swap = leftind;
                }
                }
                if(rightind < length) {
                    right = this.values[rightind];
                    if(
                        (swap === null && rightind > element) ||
                        (swap !== null && right > left)
                    ) {
                        swap = rightind;
                    }
                }
                if (swap === null) break;
                this.values[ind] = this.values[swap];
                this.values[swap] = element;
                ind = swap;
            }
        }
}

let heap = new MBH();
heap.insert(4);
heap.insert(0);
heap.insert(1);
heap.insert(7);
heap.insert(4);
heap.insert(1);
heap.insert(3);
heap.extractMAx();
console.log(heap.values);