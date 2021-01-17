import React from "react";
import { IProps } from "./type";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import styles from "./FormItem.module.scss";

const FormItem = ({ text, type, value, onChange, placeholder }: IProps) => {
  return (
    <div className={`${styles.default}`}>
      <Label text={text} />
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormItem;
