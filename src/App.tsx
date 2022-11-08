import React from "react";
import "./App.css";
import { PrimaryButton } from "./components/primary-button";

function App() {
  const [hasClicked, setHasClicked] = React.useState(false);
  const [isLoaded, setHasLoaded] = React.useState(false);

  React.useEffect(() => {
    if (hasClicked) {
      let delayedTimeout = setTimeout(() => setHasLoaded(true), 3000);
      return () => clearTimeout(delayedTimeout);
    }
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
      {isLoaded ? (
        <div data-testid="loaded-content">hi data</div>
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
