class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation = 'Nowhere') {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    return `${super.getGreeting()} I am visiting from ${this.homeLocation}.`
  }
}

const me = new Traveler('Joey Crachiolo', 34, 'Charlotte, NC');
// console.log(me);
// console.log(me.hasMajor());
console.log(me.getGreeting());

const other = new Traveler();
// console.log(other);
// console.log(other.hasMajor());
console.log(other.getGreeting());