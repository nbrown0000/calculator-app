import Node from './node.js';
import { operate } from './calculator.js';

function isNumber(string) {
  return string.match(/^[0-9]*([.][0-9]*)?$/);
}

function isOperator(string) {
  return string.match(/\+|\-|\/|\*/);
}

function buildTreeFromString(string) {
  let root;

  for (let i=0; i<string.length; i++) {
    // no root node yet
    if (!root) {
      root = new Node(string[i], null, null)
    }

    // string index contains numbers
    else if (isNumber(string[i])) {
      if (isOperator(root.getValue())) {
        if (!root.leftChild) {
          root.leftChild = new Node(string[i], null, null);
        }
        else if (!root.rightChild) {
          root.rightChild = new Node(string[i], null, null);
        }
        else {
          root.rightChild.setValue(root.rightChild.getValue() + string[i])
        }
      }
      else if (isNumber(root.getValue())) {
        // root.setValue(root.getValue() + string[i]);
        root.setValue(root.getValue().concat(string[i]));
      }
    }

    // string index contains one of { +, -, /, * }
    else if (isOperator(string[i])) {
      if (isNumber(root.getValue())) {
        let temp = root;
        root = new Node(string[i], temp, null)
      }
      else if (isOperator(root.getValue())) {
        let temp = root;
        root = new Node(string[i], temp, null);
      }
    }
   
  }

  // return the whole tree
  return root;
}

function calculateInOrder(tree) {
  // binary tree passed as argument
  // traverse In-Order to calculate answer to arithmetic 
  
  // visit root
  if (isNumber(tree.getValue())) {
    return tree.getValue();
  }
  else if (isOperator(tree.getValue())) {
    return operate(tree.getValue(), calculateInOrder(tree.leftChild), calculateInOrder(tree.rightChild))
  }

  // DONE 1. string of arithmetic with single digit numbers
  // PART WORKING 2. string of arithmetic with multiple digit numbers
  // 3. handle mistakes in arithmetic (eg. output "Malformed express for '34+' " )
}

function parseInOrder(tree) {
  if (tree === null) {
    return false
  }
  else if (isNumber(tree.getValue())) {
    return true;
  }
  else if (isOperator(tree.getValue())) {
    return parseInOrder(tree.leftChild) && parseInOrder(tree.rightChild);
  }
  else {
    return false;
  }
}

export {
  buildTreeFromString,
  calculateInOrder,
  parseInOrder
}