import { render, screen, fireEvent } from "@testing-library/react";
import Register from "../Register";

test("renders learn react link", () => {
  render(<Register />);
  const inputField = screen.getByPlaceholderText("First Name");
  const anotherInputField = screen.getByPlaceholderText("Last Name");
  fireEvent.change(inputField, { target: { value: "Test" } });
  fireEvent.change(anotherInputField, { target: { value: "User" } });
  expect(inputField.value).toBe("Test");
  expect(anotherInputField.value).toBe("User");
});
