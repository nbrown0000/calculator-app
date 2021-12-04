import { buildTreeFromString, calculateInOrder, parseInOrder } from './binaryTree.js';


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

function clearDisplay() {
  setDisplay('0');
}

function calculate(string) {
  let tree = buildTreeFromString(string);
  let parsedSuccess = parseInOrder(tree);
  if (parsedSuccess) {
    let result = calculateInOrder(tree);
    setDisplay(result);
  }
  else {
    setDisplay('Syntax Error');
  }
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