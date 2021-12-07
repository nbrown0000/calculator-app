const add = function(num1, num2) {
  if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
    return "ERROR";
  }
  return num1 + num2;
}

function subtract(num1, num2) {
  if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
    return "ERROR";
  }
  return num1 - num2;
}

function divide(num1, num2) {
  if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
    return "ERROR";
  }
  return num1 / num2;
}

function multiply(num1, num2) {
  if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
    return "ERROR";
  }
  return num1 * num2;
}

function operate(operator, num1, num2) {
  let number1 = parseFloat(num1);
  let number2 = parseFloat(num2);
  if (operator === '+') {
    return add(number1, number2);
  }
  else if (operator === '-') {
    return subtract(number1, number2);
  }
  else if (operator === '/') {
    return divide(number1, number2);
  }
  else if (operator === '*') {
    return multiply(number1, number2);
  }
}

export {
  add,
  subtract,
  divide,
  multiply,
  operate
}