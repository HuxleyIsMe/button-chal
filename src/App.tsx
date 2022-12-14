import React from "react";
import "./App.css";
import { PrimaryButton } from "./components/primary-button";

function App() {
  const [hasClicked, setHasClicked] = React.useState(false);
  const [hasLoaded, setHasLoaded] = React.useState(false);

  React.useEffect(() => {
    let delayedTimeout: null | NodeJS.Timeout = null;
    if (hasClicked) {
      delayedTimeout = setTimeout(() => setHasLoaded(true), 3000);
    }
    return () =>
      delayedTimeout
        ? clearTimeout(delayedTimeout as NodeJS.Timeout)
        : undefined;
  }, [hasClicked]);

  return (
    <div className="App">
      <h1>Button Challenge</h1>
      <p>
        The following button should be pink without borders and should show some
        hover effect (feel free to choose anything you want).
      </p>
      <p>
        If you click the button, the button should become disabled and should
        show <em>"Processing..."</em>. After 3 seconds the button should
        disappear and should be replaced with a new paragraph which shows{" "}
        <em>"This is your processed data."</em>.
      </p>
      {hasLoaded ? (
        <div data-testid="loaded-content">This is your processed data.</div>
      ) : (
        <PrimaryButton
          isClicked={hasClicked}
          disabled={hasClicked}
          text="Style Me!"
          onClick={() => setHasClicked((prev) => !prev)}
        />
      )}
    </div>
  );
}

export default App;
