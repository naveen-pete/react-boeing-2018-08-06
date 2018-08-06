
// Template literals
const s = 'this is a simple string.\
  this is the second part';

const name = 'boeing';

const s1 = `this is a simple string.
${ 'Hello ' + name.toUpperCase() }
this is the second part`;

console.log(s);
console.log(s1);