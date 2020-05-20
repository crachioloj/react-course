// const person = {
//   name: "Joey C",
//   age: 34,
//   location: {
//     city: "Stallings",
//     temp: 65,
//   },
// };

// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}`);

// const { temp: temperature, city } = person.location;
// if (temperature && city) {
//   console.log(`It is ${temperature} degrees in ${city}`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

// const address = ["1205 Gainsborough Dr", "Stallings", "North Carolina", "28104"];

// const [, city, state = "New York"] = address;

// console.log(`You are in ${city}, ${state}. `);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [name, , mediumPrice] = item;
console.log(`A medium ${name} costs ${mediumPrice}.`);