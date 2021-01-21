import React from "react";
import styled from "styled-components";
import { IProps } from "./type";

const LiComponent = styled.li`
  width: "100%";
  text-align: left;
  margin: 10px;
  box-sizing: border-box;
`;

const Li = ({ text }: IProps) => {
  return <LiComponent>{text}</LiComponent>;
};

export default Li;
