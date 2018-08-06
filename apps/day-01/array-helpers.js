const arr = [10, 20, 30];

// forEach()
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// arr.forEach((n) => {
//   sum += n;
// });
// console.log('sum:', sum);

// map()
// const doubles = arr.map(n =>  n * 2);

// console.log('arr:', arr);

// console.log('doubles:', doubles);


// const products = [
//   { name: 'Nikon Coolpix A10', type: 'Camera'},
//   { name: 'Sony DSC W830', type: 'Camera'},
//   { name: 'Apple MacBook Air', type: 'Laptop'},
//   { name: 'Dell Inspiron', type: 'Laptop'}
// ];

// const filteredProducts = products.filter(product => product.type !== 'Camera');

// console.log(filteredProducts);

// var accounts = [
//   { id: 1, balance: -10 },
//   { id: 2, balance: 12 },
//   { id: 3, balance: 0 }
// ];

// var account = accounts.find(function(account) {
//     return account.id === 2;
// });

// console.log(account);

// some() and every()
// var computers = [
//   { name: 'Apple', ram: 32 },
//   { name: 'Dell', ram: 20 },
//   { name: 'Acer', ram: 12},
//   { name: 'HP', ram: 24 }
// ];

// console.log(computers.length);

// // var everyComputerIsEligible = computers.every(function(computer) {
// var everyComputerIsEligible = computers.some(function(computer) {
//     return computer.ram > 16;
// });

// console.log(everyComputerIsEligible);

// reduce()
const s = arr.reduce((prevTotal, n) => {
  return prevTotal + n;
});

console.log('s:', s);
