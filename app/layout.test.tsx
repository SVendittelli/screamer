import { render, screen } from "@testing-library/react";

describe("RootLayout", () => {
  it("renders its children", () => {
    render(<div>Child element</div>);
    const child = screen.getByText(/Child element/);
    expect(child).toBeInTheDocument();
  });
});
