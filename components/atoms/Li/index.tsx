import React from 'react';
import styled from 'styled-components';
import { IProps } from './type';

const LiComponent = styled.li`
  width: '100%';
  text-align: left;
  margin: 10px;
  box-sizing: border-box;
  cursor: pointer;
  text-align: ${(props: IProps) =>
    props.textAlign ? props.textAlign : 'left'};
`;

const Li = ({ children = undefined, text, textAlign = '' }: IProps) => {
  return (
    <LiComponent textAlign={textAlign}>
      {children ? children : text}
    </LiComponent>
  );
};

export default Li;
