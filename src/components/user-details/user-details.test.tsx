import { render } from "@testing-library/react";
import UserDetails from "./user-details";

describe("UserDetails component", () => {
  test("renders correctly", () => {
    const { getByText } = render(<UserDetails />);

    expect(getByText(/Username/i)).toBeInTheDocument();
    expect(getByText(/Job Title/i)).toBeInTheDocument();
  });
});
