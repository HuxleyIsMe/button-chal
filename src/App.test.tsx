import React from "react";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const DELAYED_TIMEOUT = { timeout: 3100 };
describe("App loading", () => {
  it("displays a button that onclick shows a paragraph of text", async () => {
    render(<App />);
    const primaryButton = screen.getByRole("button");
    expect(primaryButton).toBeInTheDocument();
    userEvent.click(primaryButton);
    await waitForElementToBeRemoved(primaryButton, DELAYED_TIMEOUT);
    expect(screen.getByTestId(/loaded-content/));
  });

  describe("button", () => {
    it("changes text to 'Processing' and disappeares after 3 seconds", async () => {
      render(<App />);
      const primaryButton = screen.getByRole("button");
      expect(screen.queryByText(/processing/)).not.toBeInTheDocument();
      expect(primaryButton).toBeInTheDocument();
      userEvent.click(primaryButton);
      expect(await screen.findByText(/processing/)).toBeInTheDocument();
      await waitForElementToBeRemoved(primaryButton, DELAYED_TIMEOUT);
      expect(screen.getByTestId(/loaded-content/));
    });
    it("becomes disabled on click", async () => {
      render(<App />);
      const primaryButton = screen.getByRole("button");
      expect(primaryButton).toBeInTheDocument();
      expect(primaryButton).not.toBeDisabled();
      userEvent.click(primaryButton);
      await waitFor(() => expect(primaryButton).toBeDisabled());
      await waitForElementToBeRemoved(primaryButton, DELAYED_TIMEOUT);
      expect(screen.getByTestId(/loaded-content/));
    });
  });
});
