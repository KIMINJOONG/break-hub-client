import React from "react";
import styled from "styled-components";
import List from "../../molecules/List";

const SideMenuListComponent = styled.div``;

const menuDummy = [
  {
    text: "카테고리 추가",
  },
  {
    text: "게시판",
  },
];
const SideMenuList = () => {
  return (
    <SideMenuListComponent>
      <List items={menuDummy} />
    </SideMenuListComponent>
  );
};

export default SideMenuList;
