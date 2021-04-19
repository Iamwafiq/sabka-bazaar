import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../Login";

test("renders learn react link", () => {
  render(<Login />);
  const inputField = screen.getByPlaceholderText("Email");
  const anotherInputField = screen.getByPlaceholderText("Password");
  fireEvent.change(inputField, { target: { value: "testuser@gmail.com" } });
  fireEvent.change(anotherInputField, { target: { value: "P@ssw0rd" } });
  expect(inputField.value).toBe("testuser@gmail.com");
  expect(anotherInputField.value).toBe("P@ssw0rd");
});
