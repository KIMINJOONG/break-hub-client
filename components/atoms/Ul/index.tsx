import React from "react";
import styled from "styled-components";
import { IProps } from "./type";

const UlComponent = styled.ul``;

const Ul = ({ children }: IProps) => {
  return <UlComponent>{children}</UlComponent>;
};

export default Ul;
