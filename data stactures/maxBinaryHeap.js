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
            let idx = this.values.length - 1;
            const element = this.values[idx];
            while(idx > 0){
                let parentIdx = Math.floor((idx - 1)/2);
                let parent = this.values[parentIdx];
                if(element <= parent) break;
                this.values[parentIdx] = element;
                this.values[idx] = parent;
                idx = parentIdx;
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
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.extractMAx();
console.log(heap.values);