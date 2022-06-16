class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    traverse() {
        var  current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next
        }
    }
    pop() {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail = null
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if(!this.head) return undefined;
        var current = this.head;
        if(!current.next) this.head = null;
        this.head = current.next;
        this.length--;
        return current
    }
    unshift(val) {
        var node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }
    get(ind) {
        if(ind < 0 || ind >= this.length) return null;
        var current = this.head;
        for(let i = 0; i< ind; i++) {
            current = current.next;
        }
        return current;
    }
    set(ind, value) {
        var found = this.get(ind);
        if(found) {
            found.val = value;
            return true;
        }
        return false;
    }
    insert(ind, val) {
        if(ind == 0) return this.unshift(val);
        if(ind === this.length) return this.push(val);
        if(ind < 0 || ind < 0) return false;
        
        const newNode = new Node(val);
        var prev = this.get(ind-1);
        var temp = prev.next
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return this;
    }
    remove(ind) {
        if(ind < 0 || ind >= this.length) return undefined;
        if(ind == this.length -1) this.pop();
        if(ind == 0) this.shift();
        var prev = this.get(ind-1);
        var reterned = this.get(ind)
        prev.next = prev.next.next;
        this.length--;
        return reterned.val;
    }
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next, prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
}
}

var list = new SinglyLinkedList()
list.push('hi')
list.push('there')
list.push('nigga1')
list.reverse()
console.log(list)