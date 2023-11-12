import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("renders page title 'Screamer'", () => {
    render(<Home />);
    const messageElement = screen.getByText(/Screamer/);
    expect(messageElement).toBeInTheDocument();
  });

  it("renders three buttons", () => {
    render(<Home />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toEqual(3);
  });

  it.each([["Try demo"], ["Sign up"], ["Log in"]])(
    "renders a '%s' button",
    (text) => {
      render(<Home />);
      const button = screen.getByText(text);
      expect(button).toBeInTheDocument();
    },
  );

  it("has a footer containing the current year", () => {
    const currentYear = new Date().getFullYear();
    render(<Home />);
    const footer = screen.getByText(new RegExp(currentYear.toString()));
    expect(footer).toBeInTheDocument();
    expect(footer).toBeVisible();
    expect(footer).toHaveTextContent(/^© 2023/);
  });
});
