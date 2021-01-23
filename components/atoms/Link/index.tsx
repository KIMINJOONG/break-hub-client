import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { IProps } from "./type";

const LinkComponent = styled(Link)``;
const A = styled.a``;

const LinkAtom = ({ href, text }: IProps) => {
  return (
    <LinkComponent href={`/${href}`}>
      <A>{text}</A>
    </LinkComponent>
  );
};

export default LinkAtom;
