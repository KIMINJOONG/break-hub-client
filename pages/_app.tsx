import React from 'react';
import Head from 'next/head';
import wrapper from '../stores/configureStore';
import '../styles/index.css';

const MyBlog: any = ({ Component }: any) => {
  return (
    <div>
      <Head>
        <title>비허브 관리자</title>
        <meta property="og:title" content="My new title" key="title" />
        <meta
          property="og:image"
          content="https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188327.jpg"
        />
        <meta property="og:description" content="Og tag test!!!" />
        <meta property="og:title" content="Og tag test!!! title" />
      </Head>
      <Component />
    </div>
  );
};

export default wrapper.withRedux(MyBlog);
