import React from "react";
import styled from "styled-components";
import Menu from "../../molecules/Menu";

const SideMenuListComponent = styled.div``;

const menuDummy = [
  {
    text: "검색조건 추가",
    href: "addSearch",
  },
  {
    text: "동영상 게시판",
    href: "main",
  },
];
const SideMenuList = () => {
  return (
    <SideMenuListComponent>
      <Menu items={menuDummy} />
    </SideMenuListComponent>
  );
};

export default SideMenuList;
