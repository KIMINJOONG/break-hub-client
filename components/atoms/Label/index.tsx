import React from "react";
import { IProps } from "./type";
import styles from "./Label.module.scss";

const Label = ({ text }: IProps) => {
  return <label className={`${styles.default}`}>{text}</label>;
};

export default Label;
