import React from "react";
import styles from "./primary-button.module.css";

/** This doesnt need to be its own comp right now, however i wanted to show how i would split this out */

interface PrimaryButton {
  disabled: boolean;
  isClicked: boolean;
  text: string;
  onClick: VoidFunction;
}

export const PrimaryButton: React.FC<PrimaryButton> = ({
  disabled,
  isClicked,
  text,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      className={styles.pinkButton}
      type="button"
      onClick={onClick}
      aria-details={`${text} button`}
    >
      {isClicked ? "processing..." : text}
    </button>
  );
};
