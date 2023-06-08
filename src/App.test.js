import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders PT #1 card", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Personality Test #1/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders PT #2 card", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Personality Test #2/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders PT #3 card", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Personality Test #3/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders PT #4 card", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Personality Test #4/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders PT #5 card", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Personality Test #5/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders PT #6 card", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Personality Test #6/i);
  expect(linkElement).toBeInTheDocument();
});
