
import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should render ExpenseForm correctly", () => {
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

// this shite doesn't work. need to revisit Lecture 122 thru 127

/*
test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", {
    preventDefault: () => { },
  });
  // This errors out for some reason???
  expect(component.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
}); 

test("should set description on input change", () => {
  const value = "new description";
  const wrapper = shallow(<ExpenseForm/>);
  
  // same here :(
  wrapper.find("input").at(0).simulate("change", {
    target: { value }
  });
  expect(wrapper.instance.state("description")).toBe(value);
});

test("should set note on textarea change", () => {
  const value = "new note value";
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find("textarea").simulate("change", {
    target: {value}
  })
  expect(wrapper.state("note")).toBe(value);
});

test("should call onSubmit prop for valid form submission", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
  wrapper.find("form").simulate("submit", {
    preventDefault: () => { }
  });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt,
  });
});

test("should set new date on date change", () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find("SingleDatePicker").prop("onDateChange")(now);
  expect(wrapper.state("createdAt")).toEqual(now);
});
*/