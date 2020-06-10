import filtersReducer from "../../reducers/filters";
import moment from "moment";
import filters from "../../reducers/filters";

test("should set up default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  })
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount",
  };

  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const state = filters(undefined, { type: "SET_TEXT_FILTER", text: "filter test" });
  expect(state.text).toBe("filter test");
});

test("should set start date filter", () => {
  const state = filters(undefined, { type: "SET_START_DATE", startDate: moment(0).add(1, "day")});
  expect(state.startDate).toEqual(moment(0).add(1, "day"));
});

test("should set end date filter", () => {
  const state = filters(undefined, { type: "SET_END_DATE", endDate: moment(0).add(7, "day")});
  expect(state.endDate).toEqual(moment(0).add(7, "day"));
});