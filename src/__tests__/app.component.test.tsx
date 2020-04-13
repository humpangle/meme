import React from "react";
import { render } from "@testing-library/react";
import { App } from "../components/App/app-component";

test("renders learn react link", () => {
  render(<App />);
  const linkEl = document.getElementsByTagName("a").item(0);
  expect(linkEl).not.toBeNull();
});
