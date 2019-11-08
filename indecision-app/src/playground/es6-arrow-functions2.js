// const add = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

const add = (a, b) => {
  // don't have access to arguments object in arrow function
  // console.log(arguments); 
  return a + b;
};

console.log(add(55, 1, 100));

// arrow functions don't bind to their own "this" value
// uses context from which they were called

const user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "Dublin"],
  printPlacesLived() {
    return this.cities.map((city) =>  this.name + " has lived in " + city);    
  },
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [5, 6, 2, 10, 25],
  multiplyBy: 13,
  multiply() {
    return this.numbers.map((n) => n * this.multiplyBy);
  },
};

console.log(multiplier.multiply());