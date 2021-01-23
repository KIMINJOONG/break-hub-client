import React from "react";
import styled from "styled-components";
import { IProps } from "./type";

const LiComponent = styled.li`
  width: "100%";
  text-align: left;
  margin: 10px;
  box-sizing: border-box;
`;

const Li = ({ children = undefined, text }: IProps) => {
  return <LiComponent>{children ? children : text}</LiComponent>;
};

export default Li;
