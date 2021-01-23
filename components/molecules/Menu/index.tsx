import React from "react";
import Li from "../../atoms/Li";
import LinkAtom from "../../atoms/Link";
import Ul from "../../atoms/Ul";
import { IProps } from "./type";

const Menu = ({ items }: IProps) => {
  console.log("Menu");
  return (
    <Ul>
      {items.map((item: any, index: number) => (
        <Li key={index}>
          <LinkAtom href={item.href} text={item.text} />
        </Li>
      ))}
    </Ul>
  );
};

export default Menu;
