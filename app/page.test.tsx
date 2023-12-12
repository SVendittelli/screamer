import { render, screen } from "@testing-library/react";
import { getSSRSession } from "@/libs/session";
import Home from "./page";

jest.mock("@/libs/session", () => ({
  getSSRSession: jest.fn(),
}));
jest.mock("supertokens-node/recipe/userroles", () => ({}));

describe("Home", () => {
  beforeEach(() => {
    (getSSRSession as jest.Mock).mockResolvedValue({ session: null });
  });

  it("renders page title 'Screamer'", async () => {
    const home = await Home();
    render(home);
    const messageElement = screen.getByText(/Screamer/);
    expect(messageElement).toBeInTheDocument();
  });

  describe("when not logged in", () => {
    it("renders two buttons", async () => {
      const home = await Home();
      render(home);
      const buttons = screen.getAllByRole("button");
      expect(buttons.length).toEqual(2);
    });

    it.each([["Try demo"], ["Log in"]])(
      "renders a '%s' button",
      async (text) => {
        const home = await Home();
        render(home);
        const button = screen.getByText(text);
        expect(button).toBeInTheDocument();
      },
    );
  });

  describe("when logged in", () => {
    beforeEach(() => {
      (getSSRSession as jest.Mock).mockResolvedValue({
        session: { getClaimValue: jest.fn() },
      });
    });

    it("renders three buttons", async () => {
      const home = await Home();
      render(home);
      const buttons = screen.getAllByRole("button");
      expect(buttons.length).toEqual(3);
    });

    it.each([["Try demo"], ["Vote"], ["Results"]])(
      "renders a '%s' button",
      async (text) => {
        const home = await Home();
        render(home);
        const button = screen.getByText(text);
        expect(button).toBeInTheDocument();
      },
    );
  });

  it("has a footer containing the current year", async () => {
    const currentYear = new Date().getFullYear();
    const home = await Home();
    render(home);
    const footer = screen.getByText(new RegExp(currentYear.toString()));
    expect(footer).toBeInTheDocument();
    expect(footer).toBeVisible();
    expect(footer).toHaveTextContent(/^© 2023/);
  });
});
