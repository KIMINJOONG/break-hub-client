import React from "react";
import styled from "styled-components";
import SideMenuList from "../../oraganisms/SideMenuList";

const MainComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MainTemplate = () => {
  return (
    <MainComponent>
      <div
        style={{
          width: "100%",
          height: "100px",
          border: "1px solid black",
          boxSizing: "border-box",
        }}
      >
        header 영역
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
        컨텐츠영역
      </div>
    </MainComponent>
  );
};

export default MainTemplate;
