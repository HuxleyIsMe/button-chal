import React from "react";
import "./App.css";
import { PrimaryButton } from "./components/primary-button";

function App() {
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

      <PrimaryButton text="Style Me!" />
    </div>
  );
}

export default App;
