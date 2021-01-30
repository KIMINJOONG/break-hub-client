import React, { useEffect } from 'react';
import styled from 'styled-components';
import Span from '../../atoms/Span';
import SideMenuList from '../../oraganisms/SideMenuList';
import axios from 'axios';
import wrapper from '../../../stores/configureStore';
import { LOAD_BOARDS_REQUEST } from '../../../actions/board/type';
import { END } from 'redux-saga';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import { loadBoardsAction } from '../../../actions/board/action';
import { Board } from '../../../type/server';
import { useRouter } from 'next/dist/client/router';

const MainComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MainTemplate = () => {
  const { boards } = useSelector((state: RootState) => state.board);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(loadBoardsAction());
  }, []);
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
        }}
      >
        <Span>헤더</Span>
      </div>
      <div
        style={{
          flex: 1,
          maxWidth: '115px',
          border: '1px solid red',
          boxSizing: 'border-box',
        }}
      >
        <SideMenuList />
      </div>
      <div
        style={{
          display: 'flex',
          flex: 1,
          padding: '10px',
          border: '1px solid blue',
          boxSizing: 'border-box',
          flexWrap: 'wrap',
          minHeight: '100vh',
        }}
      >
        <table
          style={{
            width: '100%',
            textAlign: 'center',
            border: '1px solid black',
            boxSizing: 'border-box',
            borderCollapse: 'collapse',
            borderSpacing: 'a',
          }}
        >
          <thead>
            <tr style={{ border: '1px solid black', padding: '10px' }}>
              <td style={{ border: '1px solid black', padding: '10px' }}>
                번호
              </td>
              <td style={{ border: '1px solid black', padding: '10px' }}>
                제목
              </td>
              <td>검색조건</td>
            </tr>
          </thead>
          <tbody>
            {boards &&
              (boards.map((board: Board) => (
                <tr
                  onClick={() =>
                    router.push(`/board/${board.category}/${board.seq}`)
                  }
                  key={board.seq}
                  style={{ border: '1px solid black', padding: '10px' }}
                >
                  <td style={{ border: '1px solid black', padding: '10px' }}>
                    {board.seq}
                  </td>
                  <td style={{ border: '1px solid black', padding: '10px' }}>
                    {board.title}
                  </td>
                  <td style={{ border: '1px solid black', padding: '10px' }}>
                    {board.search}
                  </td>
                </tr>
              )) as Array<Board>)}
          </tbody>
        </table>
      </div>
    </MainComponent>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context: any) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Authorization = '';
    axios.defaults.withCredentials = true;
    if (context.req && cookie) {
      axios.defaults.headers.Authorization = cookie;
    }
    context.store.dispatch({
      type: LOAD_BOARDS_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default MainTemplate;
