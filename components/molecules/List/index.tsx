import React from "react";
import Li from "../../atoms/Li";
import Ul from "../../atoms/Ul";
import { IProps } from "./type";

const List = ({ items }: IProps) => {
  return (
    <Ul>
      {items.map((item: any) => (
        <Li text={item.text} />
      ))}
    </Ul>
  );
};

export default List;
