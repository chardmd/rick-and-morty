import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import OnboardingModal from "./onboarding-modal";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe("OnboardingModal component", () => {
  test("renders correctly", async () => {
    const { getByText, getByLabelText } = render(
      <ChakraProvider>
        <OnboardingModal />
      </ChakraProvider>
    );

    expect(getByText(/Welcome, Lets get started!/i)).toBeInTheDocument();

    const usernameInput = getByLabelText(/Username/i);
    fireEvent.change(usernameInput, { target: { value: "testUsername" } });

    const nextButtonStep1 = getByText(/Next/i);
    fireEvent.click(nextButtonStep1);

    await waitFor(() => {
      expect(getByText(/Job Title/i)).toBeInTheDocument();
    });

    const jobTitleInput = getByLabelText(/Job Title/i);
    fireEvent.change(jobTitleInput, { target: { value: "testJobTitle" } });

    const saveButtonStep2 = getByText(/Save/i);
    fireEvent.click(saveButtonStep2);
  });
});
