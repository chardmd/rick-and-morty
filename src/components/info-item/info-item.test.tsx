import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InfoItem from "./info-item";

const mockItem = {
  id: 1,
  name: "Mock Title",
  image: "mock-image-url",
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

describe("InfoItem component", () => {
  test("renders with correct item data", () => {
    const { getByText, getByAltText } = render(
      <InfoItem item={mockItem} openModal={() => {}} />
    );

    expect(getByText("Mock Title")).toBeInTheDocument();
    expect(getByText("This is a test species.")).toBeInTheDocument();
    expect(getByAltText("Mock Title")).toHaveAttribute("src", "mock-image-url");
  });

  test("calls openModal when the box is clicked", () => {
    const openModalMock = jest.fn();
    const { getByTestId } = render(
      <InfoItem item={mockItem} openModal={openModalMock} />
    );

    fireEvent.click(getByTestId("info-item-box"));
    expect(openModalMock).toHaveBeenCalled();
  });

  test("changes cursor to pointer when hovered", () => {
    const { getByTestId } = render(
      <InfoItem item={mockItem} openModal={() => {}} />
    );

    fireEvent.mouseEnter(getByTestId("info-item-box"));
    expect(getByTestId("info-item-box")).toHaveStyle("cursor: pointer;");

    fireEvent.mouseLeave(getByTestId("info-item-box"));
    expect(getByTestId("info-item-box")).toHaveStyle("cursor: auto;");
  });
});
