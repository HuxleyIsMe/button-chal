import React from "react";
import styles from "./primary-button.module.css";

interface PrimaryButton {
  text: string;
  onClick: VoidFunction;
}

export const PrimaryButton: React.FC<PrimaryButton> = ({ text, onClick }) => {
  return (
    <button
      className={styles.pinkButton}
      type="button"
      onClick={onClick}
      aria-details={`${text} button`}
    >
      {text}
    </button>
  );
};
