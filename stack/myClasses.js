export class Stack {
  constructor(stackLength) {
    this.stackLength = stackLength;
    this.stack = new Array(stackLength);
    this.topIndex = -1;
  }

  push(value) {
    if (this.topIndex + 1 === this.stackLength) {
      console.log("Stack is full");
      return false;
    }
    this.topIndex++;
    this.stack[this.topIndex] = value;
  }

  pop() {
    if (this.topIndex === -1) {
      console.log("Stack is empty");
      return false;
    }
    this.topIndex--;
    return this.stack[this.topIndex + 1];
  }

  length() {
    return this.topIndex + 1;
  }

  isFull() {
    return this.topIndex + 1 === this.stackLength;
  }

  top() {
    return this.stack[this.topIndex];
  }
}
