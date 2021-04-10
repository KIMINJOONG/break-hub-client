import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loadBoardAction } from '../../../../actions/board/action';
import Span from '../../../../components/atoms/Span';
import SideMenuList from '../../../../components/oraganisms/SideMenuList';
import { RootState } from '../../../../reducers';
import ReactPlayer from 'react-player';
import { Board, searchTag } from '../../../../type/server';
import AddBoardForm from '../../../../components/oraganisms/AddBoardForm';
import Button from '../../../../components/atoms/Button';
import { BLUE_COLOR, RED_COLOR } from '../../../../utils/theme';

const MainComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Detail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { categorySeq, boardSeq } = router.query;
  const [isUpdate, setIsUpdate] = useState(false);
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
                <Button
                  color={RED_COLOR}
                  type={'button'}
                  onClick={() => setIsUpdate(true)}
                >
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

export default Detail;
