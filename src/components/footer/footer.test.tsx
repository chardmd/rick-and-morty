import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("Footer component", () => {
  test("renders correctly", () => {
    render(<Footer />);

    expect(screen.getByText(/Repo:/i)).toBeInTheDocument();
    expect(screen.getByText(/Made by/i)).toBeInTheDocument();

    const repoLink = screen.getByRole("link", {
      name: /https:\/\/github.com\/chardmd\/rick-and-morty/i,
    });
    expect(repoLink).toBeInTheDocument();
    expect(repoLink).toHaveAttribute(
      "href",
      "https://github.com/chardmd/rick-and-morty"
    );
    expect(repoLink).toHaveAttribute("target", "_blank");

    const authorLink = screen.getByRole("link", { name: /Richard Dimalanta/i });
    expect(authorLink).toBeInTheDocument();
    expect(authorLink).toHaveAttribute("href", "https://chardmd.com");
    expect(authorLink).toHaveAttribute("target", "_blank");
  });
});
