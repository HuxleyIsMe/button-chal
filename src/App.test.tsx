import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App loading", () => {
  it("displays a button that onclick shows a paragraph of text", async () => {
    render(<App />);
    const primaryButton = screen.getByRole("button");
    expect(primaryButton).toBeInTheDocument();
    userEvent.click(primaryButton);
    await waitForElementToBeRemoved(primaryButton);
    expect(screen.getByTestId(/loaded-content/));
  });
});
