import React, { useMemo } from 'react';
import { IProps } from './type';
import Label from '../../atoms/Label';
import styled from 'styled-components';
import Textarea from '../../atoms/Textarea';

const FormItemComponent = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const FormItemTextarea = ({
  id,
  text,
  value,
  onChange,
  placeholder,
  height,
}: IProps) => {
  return useMemo(() => {
    return (
      <FormItemComponent>
        <Label text={text} htmlFor={id} />
        <Textarea
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          height={height}
        />
      </FormItemComponent>
    );
  }, [value]);
};

export default FormItemTextarea;
