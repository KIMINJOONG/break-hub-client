import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import wrapper from '../../stores/configureStore';
import { LOAD_BOARDS_REQUEST } from '../../actions/board/type';
import { END } from 'redux-saga';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { loadBoardsAction } from '../../actions/board/action';
import { Board, searchTag } from '../../type/server';
import { useRouter } from 'next/dist/client/router';
import Span from '../../components/atoms/Span';
import SideMenuList from '../../components/oraganisms/SideMenuList';

const MainComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CategoryBoards = () => {
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
          flexDirection: 'column',
        }}
      >
        <Span>헤더</Span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <SideMenuList />
      </div>
      <div
        style={{
          width: '100%',
          border: '1px solid blue',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ textAlign: 'right' }}>
          <button
            type="button"
            onClick={() => router.push('/boards/add')}
            style={{ width: '80px', height: '50px' }}
          >
            글쓰기
          </button>
        </div>
        <ul>
          {boards &&
            (boards.map((board: Board) => (
              <li
                onClick={() =>
                  router.push(`/boards/${board.category.seq}/${board.seq}`)
                }
                style={{
                  cursor: 'pointer',
                }}
              >
                <figure
                  style={{
                    height: 0,
                    paddingBottom: '60%',
                    backgroundColor: 'lightgray',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundImage: `url('https://img.youtube.com/vi/${board.videoUrl}/hqdefault.jpg')`,
                  }}
                ></figure>
                <div
                  style={{
                    flex: '1 1 auto',
                    padding: '1em',
                    backgroundColor: 'white',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                    }}
                  >
                    <h2>{board.title}</h2>
                    <span>2020-01-30</span>
                  </div>
                  <div>
                    <p>{board.content}</p>
                  </div>
                  <div>
                    {board.searchTags.map((searchTag: searchTag) => (
                      <span style={{ marginRight: '0.3rem' }}>
                        #{searchTag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            )) as Array<Board>)}
        </ul>
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

export default CategoryBoards;
