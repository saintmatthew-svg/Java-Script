const {sumArray,getAllValues,swapCoordinates,filterUnrepeatedWords,findNestedKey} = require('./SweetCoffee.js');


test('test sumArray adds numbers correctly', () => {
    expect(sumArray([1, 2, 3])).toBe(6);
    expect(sumArray([])).toBe(0);
  });

  test('test getAllValues extracts all values', () => {
    expect(getAllValues([{a: 1}, {b: 2}])).toEqual([1, 2]);
  });

  test('test swapCoordinates swaps x and y', () => {
    expect(swapCoordinates({x: 5, y: 10})).toEqual({x: 10, y: 5});
  });

  test('test filterUnrepeatedWords filters correctly', () => {
    expect(filterUnrepeatedWords("hello world hello")).toEqual(["world"]);
  });

  test('test findNestedKey finds nested keys', () => {
    const nestedObj = { a: 1, b: { c: 2, d: { e: 3 } } };
    expect(findNestedKey(nestedObj, 'e')).toBe(3);
    expect(findNestedKey(nestedObj, 'a')).toBe(1);
    expect(findNestedKey(nestedObj, 'c')).toBe(2);
  });

console.log("All tests passed!");