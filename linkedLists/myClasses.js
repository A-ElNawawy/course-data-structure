export class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  print() {
    let i = this.head;
    while (i !== null) {
      console.log(i.value);
      i = i.next;
    }
  }

  length() {
    let i = this.head;
    let count = 0;
    while (i !== null) {
      i = i.next;
      count++;
    }
    return count;
  }

  add(value = "", index) {
    if (index === undefined || index < 0 || index > this.length() + 1) {
      console.log("Enter a valid index");
      return false;
    }

    let newNode = new ListNode(value);
    let i = this.head;

    if (i === null || index === 0) {
      newNode.next = i;
      this.head = newNode;
    } else {
      for (let count = 0; count < index - 1; count++) {
        i = i.next;
      }
      newNode.next = i.next;
      i.next = newNode;
    }
  }

  remove(index) {
    if (index === undefined || index < 0 || index > this.length() + 1) {
      console.log("Enter a valid index");
      return false;
    }

    let i = this.head;

    if (i === null) {
      console.log("can't remove empty node");
      return false;
    }

    if (index === 0) {
      this.head = i.next;
    } else {
      for (let count = 0; count < index - 1; count++) {
        i = i.next;
      }
      let j = i.next;
      i.next = j.next;
    }
  }
}
