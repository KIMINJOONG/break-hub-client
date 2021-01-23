import React from "react";
import styled from "styled-components";

import { IProps } from "./type";

const SpanComponent = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const Span = ({ children }: IProps) => {
  return <SpanComponent>{children}</SpanComponent>;
};

export default Span;
