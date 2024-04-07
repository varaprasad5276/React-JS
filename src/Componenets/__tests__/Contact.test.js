import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// test or it both are same
test("should load contact us component", () => {
  // this component rendered to the JSDOM
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should load button inside Contact component", () => {
    // this component rendered to the JSDOM
    render(<Contact />);
    const button = screen.getByRole("button");
    // const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("should load input name inside contact us component", () => {
    // this component rendered to the JSDOM
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    // Assertion
    expect(inputName).toBeInTheDocument();
  });
  
  it("should load 2 input boxes on the  contact us component",()=>{
    render(<Contact />);
     // Querying
    const inputBoxes=screen.getAllByRole("textbox");
        // Assertion
    expect(inputBoxes.length).toBe(2);
  });