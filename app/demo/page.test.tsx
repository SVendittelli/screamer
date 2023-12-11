import { render, screen } from "@testing-library/react";
import Demo from "./page";

describe("Demo", () => {
  it("renders a page with title 'Screamer'", () => {
    render(<Demo />);
    const title = screen.getByText(/Screamer/);
    expect(title).toBeInTheDocument();
  });
});
