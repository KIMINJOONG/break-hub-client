import React from 'react';
import styled from 'styled-components';
import Span from '../../components/atoms/Span';
import AddBoardForm from '../../components/oraganisms/AddBoardForm';
import SideMenuList from '../../components/oraganisms/SideMenuList';

const MainComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AddBoard = () => {
  return (
    <MainComponent>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '50px',
          border: '1px solid black',
          boxSizing: 'border-box',
          flexDirection: 'column',
        }}
      >
        <Span>헤더</Span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <SideMenuList />
      </div>
      <div style={{ flex: 1 }}>
        <AddBoardForm setIsUpdate={() => null} />
      </div>
    </MainComponent>
  );
};

export default AddBoard;
