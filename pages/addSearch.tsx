import { END } from '@redux-saga/core';
import axios from 'axios';
import cookies from 'next-cookies';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { LOAD_ME_REQUEST } from '../actions/user/type';
import AddSearchTemplate from '../components/templates/AddSearchTemplate';
import { RootState } from '../reducers';
import wrapper from '../stores/configureStore';

const AddSearch = () => {
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
  return <AddSearchTemplate></AddSearchTemplate>;
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

export default AddSearch;
