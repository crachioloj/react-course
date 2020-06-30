import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses"

// whyyyyyyohwhy convert to class????
export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    props.addExpense(expense);
    props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
          onSubmit = {this.onSubmit}
        />
      </div>
    );
  }
};

// const AddExpensePage = (props) => (
//   <div>
//     <h1>Add Expense</h1>
//     <ExpenseForm 
//       onSubmit = {(expense) => {
//         props.onSubmit(expense);
//         props.history.push("/");
//       }}
//     />
//   </div>
// );

const matchDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, matchDispatchToProps)(AddExpensePage);