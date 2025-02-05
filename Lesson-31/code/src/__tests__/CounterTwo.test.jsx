import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import CounterTwo from "../pages/CounterTwo";

afterEach(cleanup);

// event handling
// test case 1
it("increment counter", () => {
  //select the element
  const { getByTestId } = render(<CounterTwo />);
  //   when
  fireEvent.click(getByTestId("up"));
  //   then
  expect(getByTestId("counter")).toHaveTextContent("1");
});

// test case 2
it("decrement counter", () => {
  //select the element
  const { getByTestId } = render(<CounterTwo />);
  //   when
  fireEvent.click(getByTestId("down"));
  //   then
  expect(getByTestId("counter")).toHaveTextContent("-1");
});

// test case 3
it("should be enabled", () => {
  const { getByTestId } = render(<CounterTwo />);
  //   then
  expect(getByTestId("up")).not.toHaveAttribute("disabled");
});

// describe
// describe("test case for inc & dec", () => {
//   it("", () => {});
//   it("", () => {});
// });
