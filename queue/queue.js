class Queue {
  constructor(length) {
    this.first = -1;
    this.last = -1;
    this.queue = new Array(length);
  }

  empty() {
    return this.first === this.last;
  }

  full() {
    return this.last === this.queue.length - 1;
  }

  enqueue(val) {
    if (this.full()) {
      console.log("Queue is full");
      return undefined;
    }

    this.last++;
    this.queue[this.last] = val;
  }

  dequeue() {
    if (this.empty()) {
      console.log("Queue is empty");
      return undefined;
    }

    this.first++;
    return this.queue[this.first];
  }
}

const main = () => {
  const myQue = new Queue(10);

  console.log(myQue.empty());
  console.log(myQue.full());
  myQue.enqueue(10);
  myQue.enqueue(20);
  myQue.enqueue(30);
  myQue.enqueue(40);
  myQue.enqueue(50);
  myQue.enqueue(60);
  myQue.enqueue(70);
  myQue.enqueue(80);
  myQue.enqueue(90);
  myQue.enqueue(100);
  myQue.enqueue(20);
  console.log(myQue.empty());
  console.log(myQue.full());
  console.log(myQue.dequeue());
  console.log(myQue.dequeue());
  console.log(myQue.dequeue());

  console.log(myQue.dequeue());
  console.log(myQue.dequeue());
  console.log(myQue.dequeue());

  console.log(myQue.dequeue());
  console.log(myQue.dequeue());
  console.log(myQue.dequeue());

  console.log(myQue.dequeue());
  console.log(myQue.dequeue());
};

main();
