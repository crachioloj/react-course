export default (expenses) => {
  const values = expenses.map((expense) => expense.amount);
  return values.reduce((a, b) => a + b, 0);
}; 