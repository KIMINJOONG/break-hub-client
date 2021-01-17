import React from "react";
import { IProps } from "./type";
import styles from "./Button.module.scss";

const Button = ({ children, type, color, onClick }: IProps) => {
  return (
    <button
      type={type}
      className={`${styles.default} ${styles[color]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
