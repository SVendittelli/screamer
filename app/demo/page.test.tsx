import { render, screen } from "@testing-library/react";
import Demo from "./page";

describe("Demo", () => {
  it("renders a page with title 'Work in Progress'", () => {
    render(<Demo />);
    const title = screen.getByText(/Work in Progress/);
    expect(title).toBeInTheDocument();
  });

  it("shows the JSON data in a collapsed details tag", () => {
    render(<Demo />);
    const jsonData = screen.getByTestId("json-data");
    expect(jsonData).toBeInTheDocument();
    expect(jsonData).not.toBeVisible();

    const summary = screen.getByText(/JSON Data/);
    expect(summary).toBeInTheDocument();
    expect(summary).toBeVisible();
    summary.click();

    expect(jsonData).toBeVisible();
    expect(jsonData).toMatchSnapshot();
  });
});
