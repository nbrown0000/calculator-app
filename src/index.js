import { buildTreeFromString, calculateInOrder } from './binaryTree.js';


// initialize display value
var display;
setDisplay('0');

// setup button listeners
const buttons = document.querySelectorAll('.btn')
buttons.forEach(button => button.addEventListener('click', function(e) {
  pressKey(e.target.textContent)
}))

function setDisplay(string) {
  const currentDisplay = document.querySelector('.display').textContent;
  if(currentDisplay.length === 13) {
    display = currentDisplay;
  }
  else {
    display = string;
  }
  document.querySelector('.display').textContent = display;
  // console.log(display, typeof(display))
}

// function updateDisplay() {
//   document.querySelector('.display').textContent = display;
// }

function clearDisplay() {
  setDisplay('0');
}

function calculate(string) {
  let tree = buildTreeFromString(string)
  let result = calculateInOrder(tree);
  setDisplay(result)
}

function pressKey(key) {
  if (key === 'C') {
    clearDisplay();
  }

  else if (key === '=') {
    calculate(display);
  }

  else if (key === '+' || key === '-' || key === '*' || key === '/') {
    setDisplay(display + key)
  }

  else if (display === '0') {
    setDisplay(key);
  }

  else {
    setDisplay(display + key);
  }

}

// let tree1 = buildTreeFromString('9+9+9+7');
// let result1 = calculateInOrder(tree1);
// console.log(result1)

// let tree2 = buildTreeFromString('2+8*3+7');
// let result2 = calculateInOrder(tree2);
// console.log(result2)

// let tree3 = buildTreeFromString('91+72');
// let result3 = calculateInOrder(tree3);
// console.log(result3)

// let tree4 = buildTreeFromString('2*15+381');
// console.table(tree4)
// let result4 = calculateInOrder(tree4);
// console.log(result4) // ??

// let tree5 = buildTreeFromString('3881+263*2');
// console.table(tree5)
// let result5 = calculateInOrder(tree5);
// console.log(result5)

// let tree6 = buildTreeFromString('30+381');
// console.table(tree6)
// let result6 = calculateInOrder(tree6);
// console.log(result6)