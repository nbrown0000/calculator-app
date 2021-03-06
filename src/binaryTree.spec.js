const {
  buildTreeFromString,
  calculateInOrder,
  parseInOrder
} = require('./binaryTree.js');

describe('build tree from string', () => {
  test('2+5', () => {
    let tree = buildTreeFromString('2+5');
    expect(tree.getValue()).toBe('+');
    expect(tree.getLeftChild().getValue()).toBe('2');
    expect(tree.getRightChild().getValue()).toBe('5');
  })

  test('9+2+5', () => {
    let tree = buildTreeFromString('9+2*5');
    expect(tree.getValue()).toBe('*');
    expect(tree.getLeftChild().getValue()).toBe('+');
    expect(tree.getRightChild().getValue()).toBe('5');
    expect(tree.getLeftChild().getLeftChild().getValue()).toBe('9');
    expect(tree.getLeftChild().getRightChild().getValue()).toBe('2');
  })

  test('2+8*3+7', () => {
    let tree = buildTreeFromString('2+8*3+7');
    expect(tree.getValue()).toBe('+');
    expect(tree.getLeftChild().getValue()).toBe('*');
    expect(tree.getRightChild().getValue()).toBe('7');
    expect(tree.getLeftChild().getLeftChild().getValue()).toBe('+');
    expect(tree.getLeftChild().getRightChild().getValue()).toBe('3');
    expect(tree.getLeftChild().getLeftChild().getLeftChild().getValue()).toBe('2');
    expect(tree.getLeftChild().getLeftChild().getRightChild().getValue()).toBe('8');
  })

  test('1.5+1.5', () => {
    let tree = buildTreeFromString('1.5+1.5');
    expect(tree.getValue()).toBe('+');
    expect(tree.getLeftChild().getValue()).toBe('1.5');
    expect(tree.getRightChild().getValue()).toBe('1.5');
  })
})

describe('calculate in order', () => {
  test('5+2', () => {
    let tree = buildTreeFromString('5+2');
    let result = calculateInOrder(tree);
    expect(result).toBe(7);
  })

  test('9+9+9+7', () => {
    let tree = buildTreeFromString('9+9+9+7');
    let result = calculateInOrder(tree);
    expect(result).toBe(34);
  })

  test('91+72', () => {
    let tree = buildTreeFromString('91+72');
    let result = calculateInOrder(tree);
    expect(result).toBe(163);
  })

  test('2*15+381', () => {
    let tree = buildTreeFromString('2*15+381');
    let result = calculateInOrder(tree);
    expect(result).toBe(411);
  })

  test('3881+263*2', () => {
    let tree = buildTreeFromString('3881+263*2');
    let result = calculateInOrder(tree);
    expect(result).toBe(8288);
  })

  test('30+381', () => {
    let tree = buildTreeFromString('30+381');
    let result = calculateInOrder(tree);
    expect(result).toBe(411);
  })

  test('1.5+1.5', () => {
    let tree = buildTreeFromString('1.5+1.5');
    let result = calculateInOrder(tree);
    expect(result).toBe(3);
  })

  test('5/2', () => {
    let tree = buildTreeFromString('5/2');
    let result = calculateInOrder(tree);
    expect(result).toBe(2.5);
  })

})

describe('parse in order', () => {
  test('5+2', () => {
    let tree = buildTreeFromString('5+2');
    let parsed = parseInOrder(tree);
    expect(parsed).toBe(true);
  })

  test('5+', () => {
    let tree = buildTreeFromString('5+');
    let parsed = parseInOrder(tree);
    expect(parsed).toBe(false);
  })

  test('+3', () => {
    let tree = buildTreeFromString('+3');
    let parsed = parseInOrder(tree);
    expect(parsed).toBe(false);
  })

  test('2+3/', () => {
    let tree = buildTreeFromString('2+3/');
    let parsed = parseInOrder(tree);
    expect(parsed).toBe(false);
  })

  test('1.5+1.5', () => {
    let tree = buildTreeFromString('1.5+1.5');
    let parsed = parseInOrder(tree);
    expect(parsed).toBe(true);
  })

})