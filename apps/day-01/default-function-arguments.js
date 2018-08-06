// Default function arguments
const greet2 = function (name = 'Boeing', a, b = 10) {
  console.log('Hi', name);
  console.log('a:', a, ' b:', b);
};

let x;

greet2('hari', 10, 20);
greet2();
greet2('hari', 10, 20, 30);
