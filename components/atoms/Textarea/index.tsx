import React, { useMemo } from 'react';
import styled from 'styled-components';
import { IProps } from './type';

const TextareaComponent = styled.textarea`
  width: 100%;
  height: ${(props: IProps) => (props.height ? props.height : '50px')};
  box-sizing: border-box;
`;

const Textarea = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  height,
}: IProps) => {
  return useMemo(() => {
    return (
      <TextareaComponent
        id={id}
        name={name ? name : ''}
        value={value}
        onChange={onChange}
        placeholder={placeholder ? placeholder : ''}
        height={height}
      />
    );
  }, [value]);
};

export default Textarea;
