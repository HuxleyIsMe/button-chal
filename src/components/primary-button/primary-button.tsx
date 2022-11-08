import React from "react";
import styles from "./primary-button.module.css";

interface PrimaryButton {
  text: string;
}

export const PrimaryButton: React.FC<PrimaryButton> = ({ text }) => {
  return (
    <button
      className={styles.pinkButton}
      type="button"
      aria-details={`${text} button`}
    >
      {text}
    </button>
  );
};
