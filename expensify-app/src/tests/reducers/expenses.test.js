import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses]);
});

test("should add an expense", () => {
  const newExpense = {
    id: "4",
    description: "Interwebz",
    note: "",
    amount: 9900,
    createdAt: moment(0).add(7, "days").valueOf(),
  };
  const action = {
    type: "ADD_EXPENSE",
    expense: newExpense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

test("should edit an expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: { 
      description: "Mortgage",
      amount: 145000,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1]).toEqual({
    ...expenses[1],
    description: "Mortgage",
    amount: 145000,});
});

test("should not edit an expense if not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: { 
      description: "Mortgage",
      amount: 145000,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should set expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[0], expenses[2]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});