import React from "react";
import styles from "./Input.module.scss";
import { IProps } from "./type";

const Input = ({ type, value, onChange, placeholder }: IProps) => {
  return (
    <input
      type={type}
      className={`${styles.default}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
