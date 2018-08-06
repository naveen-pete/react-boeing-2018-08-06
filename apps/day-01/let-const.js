let a = 10;
const b = 10;

var a = 20;

console.log('a =', a);
console.log('b =', b);
console.log('d =', d);
c();

// Hoisting
var d= 40;

function c() {
  console.log('hi');

  {
    let e = 100;
    console.log('inside of block e:', e);
  }
}
