'use strict';

function forEach(array, callBack) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callBack(array[i]));
  }
  return result;
}

function map(array, callBack) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callBack(array[i]));
  }
  return result;
}

function filter(array, callBack) { 
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callBack(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

function reduce(array, callBack, initialValue) {
  let result = initialValue;
  for (let i = 0; i < array.length; i++) {
    result = callBack.call(undefined, result, array[i], i, array);
  }
  return result;
}

module.exports.forEach = forEach;
module.exports.map = map;
module.exports.filter = filter;
module.exports.reduce = reduce;
