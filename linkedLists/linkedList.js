import { LinkedList } from "./myClasses.js";

const main = () => {
  const l1 = new LinkedList();
  //console.log(l1.length());

  //l1.remove(1);
  l1.add("a", 0);
  //console.log(l1.length());
  l1.add("b", 1);
  l1.add("c", 2);
  l1.add("d", 3);
  l1.add("x", 1);
  l1.add("h", 0);
  l1.add("d", 15);
  //console.log(l1.length());
  l1.print();
  l1.remove(0);
  l1.remove(15);
  console.log("---------------");
  l1.print();
};

main();
