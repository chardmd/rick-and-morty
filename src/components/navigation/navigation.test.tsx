import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navigation from "./navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe("Navigation component", () => {
  test("renders correctly and handles menu click", async () => {
    const { getByText, getByTestId } = render(<Navigation />);
    expect(getByText(/Rick and Morty ✨🧪/i)).toBeInTheDocument();
    const menuButton = getByTestId("menu-button");
    fireEvent.click(menuButton);
  });

  test("handles clear data and logout", async () => {
    const { getByText, getByTestId } = render(<Navigation />);
    const menuButton = getByTestId("menu-button");
    fireEvent.click(menuButton);

    const mockLocalStorage = {
      getItem: jest.fn((key) => {
        if (key === "username") {
          return "TestUsername";
        }
        if (key === "jobTitle") {
          return "TestJobTitle";
        }
        return null;
      }),
      removeItem: jest.fn(),
    };
    Object.defineProperty(window, "localStorage", { value: mockLocalStorage });

    const logoutButton = getByText(/Logout/i);
    fireEvent.click(logoutButton);
  });
});
