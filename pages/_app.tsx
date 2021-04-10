import React from 'react';
import Head from 'next/head';
import wrapper from '../stores/configureStore';
import '../styles/index.css';

const MyBlog: any = ({ Component }: any) => {
  return (
    <div>
      <Head>
        <title>비허브 관리자</title>
      </Head>
      <Component />
    </div>
  );
};

export default wrapper.withRedux(MyBlog);
