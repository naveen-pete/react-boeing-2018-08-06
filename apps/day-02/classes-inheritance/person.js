class Person2 {
  constructor( name, age ) {
      this.name = name;
      this.age = age;
  }

  // a 'static' method using new syntax
  static sayHello() {
      console.log( 'Hello' );
  }

  getName() {
      return this.name;
  }

  getAge() {
      return this.age;
  }

  setName( name ) {
      this.name = name;
      return this;
  }

  setAge( age ) {
      this.age = age;
      return this;
  }

  celebrateBirthday() {
      this.setAge( this.getAge() + 1 );
      return this;
  }
}

Person2.sayHello();

let jenny = new Person2( 'Jenny', 25 );
console.log( `Updated age of Jenny = ${jenny.celebrateBirthday().getAge()}` );
