import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filters";
import { DateRangePicker } from "react-dates"

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };
  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({calendarFocused}));
  };
  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={(e) => {
          dispatch(setTextFilter(e.target.value));
        }}/>
        <select 
          value={this.props.filters.sortBy}
          onChange={(e) => {
            switch (e.target.value) {
              case "date":
                this.props.dispatch(sortByDate());
                break;
              case "amount":
                this.props.dispatch(sortByAmount());
                break;
            };
          }
        }>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideOfRange={() => false}
        />
      </div>
    );
  };  
}

// function component version
/*
const ExpenseListFilters = ({filters, dispatch}) => {
  return (
    <div>
      <input type="text" value={filters.text} onChange={(e) => {
        dispatch(setTextFilter(e.target.value));
      }}/>
      <select 
        value={filters.sortBy}
        onChange={(e) => {
          switch (e.target.value) {
            case "date":
              dispatch(sortByDate());
              break;
            case "amount":
              dispatch(sortByAmount());
              break;
          };
        }
      }>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};
*/

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);