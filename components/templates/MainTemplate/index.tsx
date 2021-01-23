import React from "react";
import styled from "styled-components";
import Span from "../../atoms/Span";
import SideMenuList from "../../oraganisms/SideMenuList";
import Link from "next/link";

const MainComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MainTemplate = () => {
  return (
    <MainComponent>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "50px",
          border: "1px solid black",
          boxSizing: "border-box",
        }}
      >
        <Span>헤더</Span>
      </div>
      <div
        style={{
          width: "30%",
          height: "100vh",
          border: "1px solid red",
          boxSizing: "border-box",
        }}
      >
        <SideMenuList />
      </div>
      <div
        style={{
          width: "70%",
          border: "1px solid blue",
          boxSizing: "border-box",
        }}
      >
        <Link href={"/addSearch"}>
          <a>ㅎㅏ이</a>
        </Link>
        동영상 리스트
      </div>
    </MainComponent>
  );
};

export default MainTemplate;
