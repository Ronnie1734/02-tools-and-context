#Scope and Context
#Given the code blocks below, answer the set of questions below. Please copy the questions to your lab directory in a file called ANSWERS.md.

#Explain how hoisting allows the printGreeting function to be called before where it's actually written in the file.

```javascript

printGreeting();

function printGreeting() {
  console.log("isn't JavaScript wonderful?");

```

When the code is compiled, javascript scans the document, saves all functions,and moves them to the top. Hoisting happens before the code is executed.

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

#Explain why this function called printGoodbye can't be executed until after it's actually written in the file.

```javascript

printGoodbye(); // this one won't execute!

const printGreeting = () => {
  console.log("That's all, folks!");
}

printGoodbye();

```
Const has to be given a value before initializing. In the above code Const is not assigned a value.

