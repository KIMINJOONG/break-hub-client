import React, { useMemo } from "react";
import styled from "styled-components";
import { IProps } from "./type";

const InputComponent = styled.input`
  width: 100%;
  box-sizing: border-box;
`;

const Input = ({ type, id, value, onChange, placeholder }: IProps) => {
  return useMemo(() => {
    return (
      <InputComponent
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  }, [value]);
};

export default Input;
