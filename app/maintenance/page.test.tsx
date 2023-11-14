import { render, screen } from "@testing-library/react";
import Page from "./page";

const refresh = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh,
  }),
}));

describe("Maintenance", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders page title 'Under Maintenance'", () => {
    render(<Page />);
    const messageElement = screen.getByText(/Under Maintenance/);
    expect(messageElement).toBeInTheDocument();
  });

  it("renders a message", () => {
    render(<Page />);
    const messageElement = screen.getByText(
      /You can try to refresh the page to see if the issue is resolved./,
    );
    expect(messageElement).toBeInTheDocument();
  });

  it("renders a 'Refresh' button", () => {
    render(<Page />);
    const button = screen.getByText("Refresh");
    expect(button).toBeInTheDocument();
    button.click();
    expect(refresh).toHaveBeenCalled();
  });
});
