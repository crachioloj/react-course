// import "./utils.js";
// import subtract, { square, add } from "./utils.js";

// console.log("app.js is running");
// console.log(square(4))
// console.log(add(2,3));
// console.log(subtract(100, 81)); //subtract, name doesn't matter for default export

import isSenior, { isAdult, canDrink } from "./person.js";

console.log(isAdult(17));
console.log(isAdult(18));
console.log(isAdult(21));

console.log(canDrink(18));
console.log(canDrink(21));
console.log(canDrink(33));

console.log(isSenior(64));
console.log(isSenior(65));
console.log(isSenior(99));