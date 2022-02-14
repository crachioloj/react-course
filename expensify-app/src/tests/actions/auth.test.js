import configureMockStore from "redux-mock-store";
import {login, logout} from "../../actions/auth";

test("should generate login action object", () => {
  const action = login("1245adfa");
  expect(action).toEqual({
    type: "LOGIN",
    uid: "1245adfa",
  });
});

test("should generate logout action object", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT",
  });
});