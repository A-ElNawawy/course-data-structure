class Queue {
  constructor(length) {
    this.first = -1;
    this.last = -1;
    this.queue = new Array(length);
  }

  empty() {
    return this.first === -1 && this.last === -1;
  }

  full() {
    return (
      (this.first === this.last && this.first !== -1) ||
      (this.last === this.queue.length - 1 && this.first === -1)
    );
  }

  enqueue(val) {
    if (this.full()) {
      console.log("Queue is full");
      return undefined;
    }

    this.last = (this.last + 1) % this.queue.length;
    this.queue[this.last] = val;
  }

  dequeue() {
    if (this.empty()) {
      console.log("Queue is empty");
      return undefined;
    }

    this.first = (this.first + 1) % this.queue.length;
    let tmp = this.first;
    if (this.first === this.last) {
      this.first = -1;
      this.last = -1;
    }

    return this.queue[tmp];
  }
}

const main = () => {
  const myQue = new Queue(5);
  console.log(myQue.empty());
  console.log(myQue.full());

  console.log(myQue.dequeue());

  myQue.enqueue(10);
  myQue.enqueue(20);
  myQue.enqueue(30);
  myQue.enqueue(40);
  myQue.enqueue(50);

  myQue.enqueue(10);

  console.log(myQue.dequeue());
  myQue.enqueue(60);
  console.log(myQue.dequeue());
  myQue.enqueue(70);
  myQue.enqueue(80);

  console.log(myQue.dequeue());
  console.log(myQue.dequeue());
  console.log(myQue.dequeue());
  console.log(myQue.dequeue());
  console.log(myQue.dequeue());
  console.log(myQue.dequeue());

  console.log(myQue.queue);
};
main();
