import React from "react";
import { IProps } from "./type";
import styled from "styled-components";

const ButtonComponent = styled.button`
  width: 100%;
  height: 30px;
  background-color: ${(props: any) => (props.color ? props.color : "#fff")};
`;

const Button = ({ children, type, color, onClick }: IProps) => {
  return (
    <ButtonComponent type={type} onClick={onClick} color={color}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
