class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    var tail = this.tail;
    if (!this.tail) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return tail;
  }
  shift() {
    var tempHead = this.head;
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      tempHead.next = null;
    }
    this.length--;
  }
  unshift(val) {
    var head = this.head;
    var node = new Node(val);
    if (!head) {
      this.head = node;
      this.tail = node;
    }
    head.prev = node;
    this.head = node;
    node.next = head;
    this.length++;
  }
  get(ind) {
    if (ind < 0 || ind >= this.length) return null;
    var mid = Math.floor(this.length / 2);
    if (ind >= mid) {
      let current = this.head;
      for (let i = 0; i < mid; i++) {
        current = current.next;
      }
      return current;
    } else {
      let current = this.tail;
      for (let i = this.length; i > mid; i--) {
        current = current.prev;
      }
      return current;
    }
  }
  set(ind, val) {
    if(ind < 0 || ind >= this.length) return null;
    var node = this.get(ind);
    node.val = val;
  }
  insert(ind, val) {
    if(ind < 0 || ind >= this.length) return null;
    if(ind === 0) this.unshift(val);
    if(ind === this.length) this.push(val);
    var node = new Node(val)
    const prev = this.get(ind-1);
    const next = prev.next;
    prev.next = node;
    node.prev = prev;
    node.next = next;
    next.prev = node;
    this.length++;
  }
  remove(ind) {
    if(ind < 0 || ind >= this.length) return null;
    if(ind === 0) this.shift();
    if(ind === this.length -1) this.pop();
    const node = this.get(ind);
    const next = node.next;
    const prev = node.prev;
    node.next = null;
    node.prev = null;
    prev.next = next;
    next.prev = prev;
    this.length--;
  }
}

var list = new DoubleLinkedList();
list.push("h2");
list.push("h3ss");
list.push("h3s");
list.remove(1);
console.log(list);
