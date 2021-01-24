import React from "react";
import styled from "styled-components";
import { IProps } from "./type";

const TableComponent = styled.table``;

const Table = ({ children }: IProps) => {
  return <TableComponent>{children}</TableComponent>;
};

export default Table;
