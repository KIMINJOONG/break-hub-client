import React from 'react';
import styled from 'styled-components';
import { IProps } from './type';

const TdComponent = styled.td`
  border: 1px solid black;
  padding: 10px;
`;

const Td = ({ children }: IProps) => {
  return <TdComponent>{children}</TdComponent>;
};

export default Td;
