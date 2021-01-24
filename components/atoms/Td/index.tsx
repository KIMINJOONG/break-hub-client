import React from "react";
import styled from "styled-components";
import { IProps } from "./type";

const TdComponent = styled.td``;

const Td = ({ text }: IProps) => {
  return <TdComponent>{text}</TdComponent>;
};

export default Td;
