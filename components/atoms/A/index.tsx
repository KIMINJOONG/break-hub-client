import React from "react";
import styled from "styled-components";
import { IProps } from "./type";

const AComponent = styled.a``;

const A = ({ text }: IProps) => {
  return <AComponent>{text}</AComponent>;
};

export default A;
