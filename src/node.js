class Node {
  constructor(value, leftChild, rightChild) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }

  getValue() {
    return this.value;
  }

  getLeftChild() {
    return this.leftChild;
  }

  getRightChild() {
    return this.rightChild;
  }

  setValue(newValue) {
    this.value = newValue;
  }

  setLeftChild(newLeftChild) {
    this.leftChild = newLeftChild;
  }

  setRightChild(newRightChild) {
    this.rightChild = newRightChild;
  }
}

export default Node