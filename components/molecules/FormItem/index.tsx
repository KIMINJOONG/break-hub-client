import React, { useMemo } from "react";
import { IProps } from "./type";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import styled from "styled-components";

const FormItemComponent = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const FormItem = ({ id, text, type, value, onChange, placeholder }: IProps) => {
  return useMemo(() => {
    return (
      <FormItemComponent>
        <Label text={text} htmlFor={id} />
        <Input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </FormItemComponent>
    );
  }, [value]);
};

export default FormItem;
