import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it('renders the "Get started by editing" message', () => {
    render(<Home />);
    const messageElement = screen.getByText(/Get started by editing/i);
    expect(messageElement).toBeInTheDocument();
  });

  it("renders the Next.js logo", () => {
    render(<Home />);
    const logoElement = screen.getByAltText(/Next.js Logo/i);
    expect(logoElement).toBeInTheDocument();
  });

  it('renders the "Docs" link', () => {
    render(<Home />);
    const docsLinkElement = screen.getByText(/Docs$/);
    expect(docsLinkElement).toBeInTheDocument();
  });

  it('renders the "Learn" link', () => {
    render(<Home />);
    const learnLinkElement = screen.getByText(/Learn$/);
    expect(learnLinkElement).toBeInTheDocument();
  });

  it('renders the "Templates" link', () => {
    render(<Home />);
    const templatesLinkElement = screen.getByText(/Templates$/);
    expect(templatesLinkElement).toBeInTheDocument();
  });

  it('renders the "Deploy" link', () => {
    render(<Home />);
    const deployLinkElement = screen.getByText(/Deploy$/);
    expect(deployLinkElement).toBeInTheDocument();
  });
});
