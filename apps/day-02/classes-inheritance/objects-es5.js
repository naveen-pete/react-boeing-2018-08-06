function Person1( name, age ) {
  this.name = name;
  this.age = age;
}

// a 'static' method (method for class and not instance) using old syntax
Person1.sayHello = function() {
  console.log( 'Hello' );
}

Person1.prototype.getName = function() {
  return this.name;
};

Person1.prototype.getAge = function() {
  return this.age;
};

Person1.prototype.setName = function( name ) {
  this.name = name;
  return this; // support chaining of method calls
};

Person1.prototype.setAge = function( age ) {
  this.age = age;
  return this;
};

Person1.prototype.celebrateBirthday = function() {
  this.setAge( this.getAge() + 1 ); // we can also say this.age++ directly
  return this;
};

Person1.sayHello();

let john = new Person1( 'John', 30 );
//console.log( `Updated age of John = ${john.celebrateBirthday().getAge()}` );

john.setName('hari').setAge('25');
console.log(john);