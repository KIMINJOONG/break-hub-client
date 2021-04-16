import React, { useEffect } from 'react';
import MainTemplate from '../components/templates/MainTemplate';
import axios from 'axios';
import { END } from '@redux-saga/core';
import wrapper from '../stores/configureStore';
import { LOAD_ME_REQUEST } from '../actions/user/type';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { useRouter } from 'next/dist/client/router';
import cookies from 'next-cookies';

const Main = () => {
  const { me } = useSelector((state: RootState) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (!me) {
      void router.push('/login');
    }
  }, [me]);
  return <MainTemplate></MainTemplate>;
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context: any) => {
    const { token } = cookies(context);
    const state = context.store.getState();
    if (token) {
      axios.defaults.headers = { Authorization: token };
      axios.defaults.withCredentials = true;
    }
    if (!state.user.me) {
      context.store.dispatch({
        type: LOAD_ME_REQUEST,
      });
    }
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);
export default Main;
