class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  isLeaf() {
    return this.left === null && this.right === null;
  }
}

class BinaryTree {
  constructor() {
    this.root = new Node("h");
  }

  isEmpty() {
    return this.root === null;
  }

  branchLength(direction, relativeRoot) {
    let count = 0;
    while (relativeRoot !== null) {
      relativeRoot = relativeRoot[direction];
      count++;
    }
    return count;
  }

  length() {
    let leftLength = this.branchLength("left", this.root);
    let rightLength = this.branchLength("right", this.root);

    console.log(leftLength, rightLength);
  }
}

const main = () => {
  const tree = new BinaryTree();

  console.log(tree.isEmpty());
  console.log(tree.length());
};

main();
