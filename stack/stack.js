import { Stack } from "./myClasses.js";

const main = () => {
  const myStack = new Stack(5);
  //console.log(myStack.stack);
  myStack.push(1);
  myStack.push(2);
  myStack.push(3);
  //console.log("length:", myStack.length());
  console.log(myStack.top());
  myStack.push(4);
  //console.log(myStack.isFull());
  myStack.push(5);
  myStack.push(6);
  //console.log("length:", myStack.length());
  //console.log(myStack.isFull());
  console.log(myStack.top());
  console.log(myStack.stack);

  console.log(myStack.pop());
  console.log(myStack.pop());
  console.log(myStack.top());
  //console.log(myStack.pop());
  //console.log(myStack.pop());
  //console.log(myStack.pop());
  //console.log(myStack.pop());
  //console.log(myStack.stack);
  //console.log("length:", myStack.length());
};

main();
