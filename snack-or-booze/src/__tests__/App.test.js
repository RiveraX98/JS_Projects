import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

it("renders homepage without crashing", () => {
  render(<App />);
});
