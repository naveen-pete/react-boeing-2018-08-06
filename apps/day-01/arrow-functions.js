// Normal
function greet1(name) {
  console.log('Hello,', name);
}

// Function expression syntax
const greet2 = function (name) {
  console.log('Hi', name);
};

// arrow function syntax
const sum = (a, b) => {
  return a + b;
};

// arrow function syntax
const sum1 = (a, b) => a + b;

// arrow function syntax
const square = x => x * x; 

// arrow function syntax for returning objects
const getCustomer = () => 
  ({
    id: 1,
    name: 'hari'
  });

greet1('hari');
greet2('krish');
console.log('sum():', sum(10, 20));
console.log('sum1():', sum1(100, 200));
console.log('square():', square(5));
console.log('getCustomer():', getCustomer());
