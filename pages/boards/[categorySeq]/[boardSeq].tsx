import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loadBoardAction } from '../../../actions/board/action';
import Span from '../../../components/atoms/Span';
import SideMenuList from '../../../components/oraganisms/SideMenuList';
import { RootState } from '../../../reducers';
import ReactPlayer from 'react-player';
import { Board, searchTag } from '../../../type/server';

const MainComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Detail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { categorySeq, boardSeq } = router.query;
  const board: Board = useSelector((statet: RootState) => statet.board.board);

  useEffect(() => {
    dispatch(
      loadBoardAction(
        parseInt(categorySeq as string, 10),
        parseInt(boardSeq as string, 10)
      )
    );
  }, [categorySeq, boardSeq]);
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
        }}
      >
        {board && (
          <div style={{ width: '100%' }}>
            <div>
              <h2>{board.title}</h2>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${board.videoUrl}`}
                  width={'100%'}
                  height={'100vh'}
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
          </div>
        )}
      </div>
    </MainComponent>
  );
};

export default Detail;
