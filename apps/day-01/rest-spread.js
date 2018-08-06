// rest parameters
// const sumNumbers = function(...numbers) {
//   return numbers.reduce((t, n) => t + n);
// }

// console.log('1.', sumNumbers(1, 2, 3));
// console.log('2.', sumNumbers(20, 35, 40, 50, 100));

// Spread syntax
const numbers = [10, 20, 5, 3];

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

var parts = ['shoulders', 'knees']; 
var lyrics = ['head', ...parts, 'and', 'toes']; 
// ["head", "shoulders", "knees", "and", "toes"]
console.log(lyrics);
