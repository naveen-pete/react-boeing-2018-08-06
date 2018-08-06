// import { Component } from '@angular/core';
// import React, { Component } from 'react'

// Array destructuring
// const names = ['hari', 'krish', 'shiv'];
// // const n1 = names[0];
// const [n1,,n2, n3='amar'] = names;

// console.log(n1);
// console.log(n2);
// console.log(n3);

// Object destructuring
const o = { 
  a: 1, 
  b: 2, 
  c: {
    c1: 'a',
    c2: 'b'
  },
  d: [1, 2, 3]
};

console.log(o);

const { b: b_1, c } = o;

console.log(b_1);
// console.log(c_10);
console.log(c);

const o_copy = { 
  ...o,
  c: { ...o.c }
};

console.log('copy:', o_copy);
console.log('after change');
o.c.c1 = 'naveen';
o.a = 'new value';
console.log('o:', o);
console.log('o_copy:', o_copy);
