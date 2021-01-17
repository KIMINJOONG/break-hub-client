import React from "react";
import { IProps } from "./type";
import styled from "styled-components";

const LabelComponent = styled.label``;

const Label = ({ text, htmlFor }: IProps) => {
  return <LabelComponent htmlFor={htmlFor}>{text}</LabelComponent>;
};

export default Label;
