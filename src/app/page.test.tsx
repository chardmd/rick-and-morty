import React from "react";
import { render } from "@testing-library/react";
import Home from "./page";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
  redirect: jest.fn(),
}));

describe("Home component", () => {
  test("renders OnboardingModal when no user data is present", () => {
    localStorage.clear();

    const { getByText } = render(<Home />);

    expect(getByText(/Welcome, Lets get started!/i)).toBeInTheDocument();
  });
});
