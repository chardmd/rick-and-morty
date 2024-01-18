import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InfoModal from "./info-modal";

const mockItem = {
  id: 1,
  name: "Test Item",
  image: "test-image.jpg",
  species: "This is a test species.",
  status: "x",
  origin: {
    name: "unknown",
  },
  location: {
    name: "earth",
  },
  type: "test",
  gender: "test",
};

describe("InfoModal component", () => {
  test("renders correctly with provided info", () => {
    const { getByText, getByAltText } = render(
      <InfoModal isOpen={true} onClose={() => {}} info={mockItem} />
    );

    expect(getByText(/Test Item/i)).toBeInTheDocument();
    expect(getByAltText(/Test Item/i)).toBeInTheDocument();
    expect(getByText(/This is a test species./i)).toBeInTheDocument();
  });

  test("handles modal close", () => {
    const onCloseMock = jest.fn();
    const { getByLabelText } = render(
      <InfoModal isOpen={true} onClose={onCloseMock} info={mockItem} />
    );

    const closeButton = getByLabelText("Close");
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
