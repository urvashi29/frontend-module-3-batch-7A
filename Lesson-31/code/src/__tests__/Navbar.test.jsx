import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

const renderWithRouter = (component) => {
  return {
    ...render(<BrowserRouter>{component}</BrowserRouter>),
  };
};

it("render counter page", () => {
  const { container } = renderWithRouter(<Navbar />);
  const navbar = screen.getByTestId("navbar");
  const link = screen.getByTestId("users"); //select links

  expect(navbar).toContainElement(link);
});
