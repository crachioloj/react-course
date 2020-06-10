import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from "../../actions/filters";
import moment from "moment";

test("should generate Set Start Date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});


test("should generate Set End Date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("should generate Set Text Filter action object", ()=> {
  const action = setTextFilter("filter me");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "filter me",
  });
});

test("should generate empty Set Text Filter action object when no text supplied", ()=> {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

test("should generate Sort By Date Filter action object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
  });
});

test("should generate Sort By Amount Filter action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});