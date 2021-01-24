import React from "react";
import Td from "../../atoms/Td";
import Tr from "../../atoms/Tr";

const TableItem = ({ list }: any) => {
  return (
    <Tr>
      {list.map((item: any, index: number) => (
        <Td text={item} key={index} />
      ))}
    </Tr>
  );
};

export default TableItem;
