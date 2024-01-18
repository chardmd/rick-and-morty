import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./pagination";

describe("Pagination component", () => {
  it("renders the component with buttons", () => {
    const handlePreviousPageMock = jest.fn();
    const handleNextPageMock = jest.fn();

    render(
      <Pagination
        handlePreviousPage={handlePreviousPageMock}
        handleNextPage={handleNextPageMock}
      />
    );

    const previousButton = screen.getByText("Previous");
    const nextButton = screen.getByText("Next");

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it("calls handlePreviousPage when Previous button is clicked", () => {
    const handlePreviousPageMock = jest.fn();
    const handleNextPageMock = jest.fn();

    render(
      <Pagination
        handlePreviousPage={handlePreviousPageMock}
        handleNextPage={handleNextPageMock}
      />
    );

    const previousButton = screen.getByText("Previous");
    fireEvent.click(previousButton);

    expect(handlePreviousPageMock).toHaveBeenCalled();
    expect(handleNextPageMock).not.toHaveBeenCalled();
  });

  it("calls handleNextPage when Next button is clicked", () => {
    const handlePreviousPageMock = jest.fn();
    const handleNextPageMock = jest.fn();

    render(
      <Pagination
        handlePreviousPage={handlePreviousPageMock}
        handleNextPage={handleNextPageMock}
      />
    );

    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    expect(handleNextPageMock).toHaveBeenCalled();
    expect(handlePreviousPageMock).not.toHaveBeenCalled();
  });
});
