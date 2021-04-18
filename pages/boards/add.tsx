import { END } from '@redux-saga/core';
import axios from 'axios';
import cookies from 'next-cookies';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { LOAD_ME_REQUEST } from '../../actions/user/type';
import Span from '../../components/atoms/Span';
import AddBoardForm from '../../components/oraganisms/AddBoardForm';
import SideMenuList from '../../components/oraganisms/SideMenuList';
import { RootState } from '../../reducers';
import wrapper from '../../stores/configureStore';

const MainComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AddBoard = () => {
  const { me, loadMeDone, loadMeError } = useSelector(
    (state: RootState) => state.user
  );
  const router = useRouter();
  useEffect(() => {
    if (loadMeDone) {
      if (!me) {
        void router.push('/login');
      }
    }
  }, [loadMeDone]);

  useEffect(() => {
    if (loadMeError) {
      alert(loadMeError.message);
      void router.push('/login');
    }
  }, [loadMeError]);
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

export const getServerSideProps = wrapper.getServerSideProps(
  async (context: any) => {
    const { token } = cookies(context);
    if (token) {
      axios.defaults.headers.Authorization = token;
      axios.defaults.withCredentials = true;
    } else {
      axios.defaults.headers.Authorization = '';
    }
    context.store.dispatch({
      type: LOAD_ME_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default AddBoard;
