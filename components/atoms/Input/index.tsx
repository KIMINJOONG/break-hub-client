import React from "react";
import styled from "styled-components";
import { IProps } from "./type";

const InputComponent = styled.input`
  width: 100%;
  box-sizing: border-box;
`;

const Input = ({ type, id, value, onChange, placeholder }: IProps) => {
  return (
    <InputComponent
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
