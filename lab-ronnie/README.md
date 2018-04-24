# Ronnie Lewis 
##### Codefellows 401 FullStack Javascript
### Lab 02

### Implement forEach/map/filter/reduce

Manually implrement the functional programming functions .forEach, .map, .filter, .reduce. Put them in one module called fp that you can import and use in other modules.

#### Function Descriptions

.forEach - executes a function for each item in a collection. Returns nothing.

.map - turns one list into a new list by passing each element through the callback function and saving each result in the new list.

.filter - takes all the elements in a list and returns a new list filtered down to only elements that pass some test defined by the callback function.

.reduce - takes all the elements in a list and reduces them down to a single value, starting from some initial value.

#### FP Module

Create a NodeJS module in the lib/ directory named fp.js that exports an object.

Create functions called forEach, map, filter, and reduce.

Each function should accept two parameters:
An array of elements
A reference to a callback function
(reduce actually accepts an additional parameter too.)

Define each function using ES6 lexical arrow function syntax.

Do not use any third party librarys in the FP module.

### Testing

#### FP Module Tests

Create a NodeJS module in the test directory named fp.test.js that asserts the correctness of the fp module.

Use Behavior-driven Development describe and test methods to define descriptive tests and increase readablity

Each test callback should aim to test a small well defined feature of a function

Write tests to ensure the fp module functions returns the correct results when invoked with valid arguments
