var nameVar = "Joe";
var nameVar = "Mike";
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

function getPetName() {
  const petName = 'Hal';
  return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping

var fullName = "Joseph Crachiolo";
if (fullName) {
  const firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);