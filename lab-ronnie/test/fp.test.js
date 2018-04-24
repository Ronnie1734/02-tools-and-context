'use strict';

const fp = require('../lib/fp');

describe('forEach function', () => {
  it('multiplies each array element by 2', () => {
    let array = [1, 2, 3];
    let result = fp.forEach(array, function(num) {
      return num * 2;
    });
    let expected = [2, 4, 6];
    expect(result).toEqual(expected);
  });
});
 
describe('map function', () => {
  it('creates a new array after multipying each element in the array by 2', () => {
    let array = [2, 4, 6];
    let result = fp.map(array, function(num) {
      return num * 2;
    });
    let expected = [4, 8, 12];
    expect(result).toEqual(expected);
  });
});

describe('filter function', () => {
  it('creates a new array of all elements divisible by 2', () => {
    let array = [1, 2, 3, 4, 5, 6];
    let result = fp.filter(array, function(num) {
      return num % 2 === 0;
    });
    let expected = [2, 4, 6];
    expect(result).toEqual(expected);
  });
});

describe('reduce function', () => {
  it('should add all numbers and return the sum', () => {
    let array = [1, 2, 3, 4];
    let result = fp.reduce(array, (a, b) => a + b, 0); 
    let expected = 10;
    expect(result).toEqual(expected);
  });
}); 
