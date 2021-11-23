const {
  add,
  subtract,
  divide,
  multiply,
  operate
} = require('./calculator.js');

describe('add', () => {
  test('add 2 + 2', () => {
    expect(add(2,2)).toBe(4)
  })

  test('add 5 + 2', () => {
    expect(add(5,2)).toBe(7)
  })

  test('handle string paramater: add \'5\' + 2', () => {
    expect(add('5',2)).toBe('ERROR')
  })

  test('handle string paramater: add 5 + \'hello\'', () => {
    expect(add(5,'hello')).toBe('ERROR')
  })
})

describe('subtract', () => {
  test('add 2 - 2', () => {
    expect(subtract(2,2)).toBe(0)
  })

  test('add 5 - 2', () => {
    expect(subtract(5,2)).toBe(3)
  })

  test('handle string paramater: \'5\' - 2', () => {
    expect(subtract('5',2)).toBe('ERROR')
  })

  test('handle string paramater: 5 - \'hello\'', () => {
    expect(subtract(5,'hello')).toBe('ERROR')
  })
})

describe('divide', () => {
  test('divide 2 by 2', () => {
    expect(divide(2,2)).toBe(1)
  })

  test('divide 2 by 2', () => {
    expect(divide(10,2)).toBe(5)
  })

  test('handle string paramater: divide \'5\' by 2', () => {
    expect(divide('5',2)).toBe('ERROR')
  })

  test('handle string paramater: divide 5 by \'hello\'', () => {
    expect(divide(5,'hello')).toBe('ERROR')
  })
})

describe('multiply', () => {
  test('2 times 2', () => {
    expect(multiply(2,2)).toBe(4)
  })

  test('2 times 2', () => {
    expect(multiply(2,8)).toBe(16)
  })

  test('handle string paramater: \'5\' times 2', () => {
    expect(multiply('5',2)).toBe('ERROR')
  })

  test('handle string paramater: 5 times \'hello\'', () => {
    expect(multiply(5,'hello')).toBe('ERROR')
  })
})

describe('operate', () => {
  test('operate(+,2,3)', () => {
    expect(operate('+',2,3)).toBe(5);
  })

  test('operate(-,5,7)', () => {
    expect(operate('-',5,7)).toBe(-2);
  })

  test('operate(-,5,-2)', () => {
    expect(operate('-',5,-2)).toBe(7);
  })
})