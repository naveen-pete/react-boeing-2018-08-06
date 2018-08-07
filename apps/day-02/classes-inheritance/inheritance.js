// Person2 class (using new syntax)
class Person2 {
  constructor( name, age ) {
      this.name = name;
      this.age = age;
      this.a = '';
  }

  getAge() {
      return this.age;
  }

  logDetails() {
      console.log( `name = ${this.name}; age = ${this.age}` );
  }
}

// Employee class and inheritance setup using new syntax (the extends keyword)
class Employee2 extends Person2 {
  constructor(name, age, role, dept) {
      // Inside the constructor, super keyword refers to the super class' constructor (i.e Person)
      // The super class constructor is called with the context of the derived class constructor
      super(name, age);

      this.role = role;
      this.dept = dept;
  }

  getRole() {
      return this.role;
  }

  logDetails() {
      // inside a method, super refers to a base class method with the same name
      super.logDetails();
      console.log( `${this.name} works for ${this.dept}` );
  }
}

let mary = new Employee2( 'Mary', 36, 'Vice President', 'Marketing' );
console.log( 'mary.getAge() = ', mary.getAge() );
console.log( 'mary.getRole() = ', mary.getRole() );
mary.logDetails();
