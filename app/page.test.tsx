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

  it("renders a 'Demo' button", () => {
    render(<Home />);
    const demoButton = screen.getByText(/Try demo/);
    expect(demoButton).toBeInTheDocument();
  });

  it("renders a 'Sign Up' button", () => {
    render(<Home />);
    const signUpButton = screen.getByText(/Sign up/);
    expect(signUpButton).toBeInTheDocument();
  });

  it("renders a 'Login' button", () => {
    render(<Home />);
    const loginButton = screen.getByText(/Log in/);
    expect(loginButton).toBeInTheDocument();
  });
});
