class Node {
    constructor(item) {
      this.value = item;
      this.next;
    }
  }
  
  class CustomList {
    constructor() {
      this.head = undefined;
    }
  
    append(item) {
      if (this.head === undefined) {
        this.head = new Node(item);
        return;
      }
  
      let t = this.head;
      while (t.next !== undefined) {
        t = t.next;
      }
      t.next = new Node(item);
    }
  
    appendToIndex(index, item) {
      if (index === 0) {
        const node = new Node(item);
        node.next = this.head;
        this.head = node;
        return;
      }
      let count = 0;
      let t = this.head;
  
      while (count < index - 1 && t.next !== undefined) {
        t = t.next;
        count += 1;
      }
  
      const node = new Node(item);
      node.next = t.next;
      t.next = node;
    }
  
    pushToTail(item) {
      const newNode = new Node(item);
      if (this.head === undefined) {
        this.head = newNode;
        return;
      }
  
      let t = this.head;
      while (t.next !== undefined) {
        t = t.next;
      }
      t.next = newNode;
    }
  
    removeLast() {
      if (this.head === undefined || this.head.next === undefined) {
        this.head = undefined;
        return;
      }
  
      let t = this.head;
      while (t.next.next !== undefined) {
        t = t.next;
      }
      t.next = undefined;
    }
  
    remove(index) {
      if (index === 0) {
        if (this.head !== undefined) {
          this.head = this.head.next;
        }
        return;
      }
  
      let count = 0;
      let t = this.head;
  
      while (count < index - 1 && t !== undefined && t.next !== undefined) {
        t = t.next;
        count += 1;
      }
  
      if (t !== undefined && t.next !== undefined) {
        t.next = t.next.next;
      }
    }
  
    get(index) {
      let count = 0;
      let t = this.head;
  
      while (count < index && t !== undefined) {
        t = t.next;
        count += 1;
      }
  
      return t !== undefined ? t.value : undefined;
    }
  }
  
  class Printer {
    constructor() {
      this.sb = "";
    }
  
    print(list) {
      this.sb = "";
      let t = list.head;
      while (t !== undefined) {
        this.sb += `${t.value} `;
        t = t.next;
      }
      return `[${this.sb.trim()}]`;
    }
  }
  
  const main = () => {
    const list = new CustomList();
    const printer = new Printer();
  
    list.append(0);
    list.append(1);
    list.appendToIndex(0, 11);
    list.pushToTail(3);
    list.removeLast();
    list.remove(1);
    console.log(printer.print(list)); // Output: [11]
    console.log(list.get(0)); // Output: 11
  }
  
  main();
  