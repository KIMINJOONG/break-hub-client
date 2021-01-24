import React from "react";
import styled from "styled-components";
import { IProps } from "./type";

const TrComponent = styled.tr``;

const Tr = ({ children }: IProps) => {
  return <TrComponent>{children}</TrComponent>;
};

export default Tr;
