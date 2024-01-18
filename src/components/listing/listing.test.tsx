import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Listing from "./listing";

const mockData = {
  characters: {
    results: [
      {
        id: 1,
        name: "Character 1",
        image: "test-image.jpeg",
        species: "test",
        status: "x",
        origin: {
          name: "unknown",
        },
        location: {
          name: "earth",
        },
        type: "test",
        gender: "test",
      },
      {
        id: 2,
        name: "Character 2",
        image: "test-image.jpeg",
        species: "test",
        status: "x",
        origin: {
          name: "unknown",
        },
        location: {
          name: "earth",
        },
        type: "test",
        gender: "test",
      },
    ],
  },
};

describe("Listing component", () => {
  it("renders the component with data", () => {
    const handleInfoItemClickMock = jest.fn();

    render(
      <Listing data={mockData} handleInfoItemClick={handleInfoItemClickMock} />
    );

    mockData.characters.results.forEach((item) => {
      const itemElement = screen.getByText(item.name);
      expect(itemElement).toBeInTheDocument();
    });
  });

  it("calls handleInfoItemClick when an item is clicked", () => {
    const handleInfoItemClickMock = jest.fn();

    render(
      <Listing data={mockData} handleInfoItemClick={handleInfoItemClickMock} />
    );

    fireEvent.click(screen.getByText(mockData.characters.results[0].name));

    expect(handleInfoItemClickMock).toHaveBeenCalledWith(
      mockData.characters.results[0]
    );
  });
});
