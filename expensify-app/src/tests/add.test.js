const add = (a,b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test("should add two numbers", () => {
  const result = add(3,4);

  // if (result !== 7) {
  //   throw new Error(`Added 4 and 3 and got ${result.toString()}. Expected 7.`);
  // }
  expect(result).toBe(7);
});

test("should greet with name", () => {
  const result = generateGreeting("Roger");
  expect(result).toBe("Hello Roger!");
});

test("should greet anonymous when no name provided", () => {
  const result = generateGreeting();
  expect(result).toBe("Hello Anonymous!");
});

