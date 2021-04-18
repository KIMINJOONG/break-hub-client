import { useRouter } from 'next/dist/client/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { removeBoardAction } from '../../../../actions/board/action';
import Span from '../../../../components/atoms/Span';
import SideMenuList from '../../../../components/oraganisms/SideMenuList';
import { RootState } from '../../../../reducers';
import ReactPlayer from 'react-player';
import { Board, searchTag } from '../../../../type/server';
import AddBoardForm from '../../../../components/oraganisms/AddBoardForm';
import Button from '../../../../components/atoms/Button';
import { BLUE_COLOR, RED_COLOR } from '../../../../utils/theme';
import { BasicResponse } from '../../../../type/basicResponse';
import wrapper from '../../../../stores/configureStore';
import cookies from 'next-cookies';
import axios from 'axios';
import { LOAD_ME_REQUEST } from '../../../../actions/user/type';
import { END } from '@redux-saga/core';
import { LOAD_BOARD_REQUEST } from '../../../../actions/board/type';

const MainComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Detail = () => {
  const { me, loadMeDone, loadMeError } = useSelector(
    (state: RootState) => state.user
  );

  const router = useRouter();
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const board: Board = useSelector((statet: RootState) => statet.board.board);
  const { removeBoardDone } = useSelector((state: RootState) => state.board);
  const removeBoard: BasicResponse<Board> = useSelector(
    (statet: RootState) => statet.board.removeBoard
  );

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

  useEffect(() => {
    if (removeBoardDone) {
      alert(removeBoard.message);
      void router.push('/boards/1');
    }
  }, [removeBoardDone]);

  const remove = useCallback(() => {
    dispatch(removeBoardAction(board.seq));
  }, [board]);
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
        {isUpdate ? (
          <AddBoardForm
            isUpdate={isUpdate}
            setIsUpdate={setIsUpdate}
            titleValue={board.title}
            contnetValue={board.content}
            videoUrlValue={board.videoUrl}
            searchTagDatas={board.searchTags}
          />
        ) : (
          board && (
            <div style={{ width: '100%' }}>
              <div>
                <h2>{board.title}</h2>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${board.videoUrl}`}
                    width={'100%'}
                    height={'auto'}
                    style={{
                      flex: 1,
                      minWidth: '183px',
                      minHeight: '400px',
                    }}
                    controls={true}
                  />
                </div>
                <p>{board.content}</p>
              </div>
              <div>
                {board.searchTags.map((searchTag: searchTag) => (
                  <span>{`#${searchTag.name}`}</span>
                ))}
              </div>
              <div>
                <Button
                  color={BLUE_COLOR}
                  type={'button'}
                  onClick={() => setIsUpdate(true)}
                >
                  수정
                </Button>
                <Button color={RED_COLOR} type={'button'} onClick={remove}>
                  삭제
                </Button>
              </div>
            </div>
          )
        )}
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

    context.store.dispatch({
      type: LOAD_BOARD_REQUEST,
      categorySeq: parseInt(context.query.categorySeq as string, 10),
      boardSeq: parseInt(context.query.boardSeq as string, 10),
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Detail;
