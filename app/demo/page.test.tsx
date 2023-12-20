import { render, screen } from "@testing-library/react";
import Demo from "./page";

describe("Demo", () => {
  it("renders a page with title 'Alien (1979)'", () => {
    render(<Demo />);
    const title = screen.getByText(/Alien \(1979\)/);
    expect(title).toBeInTheDocument();
  });
});
