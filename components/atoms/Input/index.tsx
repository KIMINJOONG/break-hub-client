import React, { useMemo } from 'react';
import styled from 'styled-components';
import { IProps } from './type';

const InputComponent = styled.input`
  width: 100%;
  box-sizing: border-box;
`;

const Input = ({ type, id, name, value, onChange, placeholder }: IProps) => {
  return useMemo(() => {
    return (
      <InputComponent
        id={id}
        name={name ? name : ''}
        type={type ? type : 'text'}
        value={value}
        onChange={onChange}
        placeholder={placeholder ? placeholder : ''}
      />
    );
  }, [value]);
};

export default Input;
