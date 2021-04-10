import { useRouter } from 'next/dist/client/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createBoardAction,
  updateBoardAction,
} from '../../../actions/board/action';
import { loadSearchTagsAction } from '../../../actions/searchTag/action';
import { RootState } from '../../../reducers';
import { BasicResponse } from '../../../type/basicResponse';
import { Board, searchTag } from '../../../type/server';
import { BLUE_COLOR, RED_COLOR } from '../../../utils/theme';
import Button from '../../atoms/Button';
import FormItem from '../../molecules/FormItem';
import FormItemTextarea from '../../molecules/FormItemTextarea';

import { IProps } from './type';

type Checkbox = {
  [k: string]: any;
};
const AddBoardForm = ({
  isUpdate = false,
  setIsUpdate,
  titleValue = '',
  contnetValue = '',
  videoUrlValue = '',
  searchTagDatas = [],
}: IProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { searchTags, searchTagsDone } = useSelector(
    (state: RootState) => state.searchTag
  );
  const addBoard: BasicResponse<Board> = useSelector(
    (statet: RootState) => statet.board.addBoard
  );

  const { addBoardDone } = useSelector((state: RootState) => state.board);

  useEffect(() => {
    dispatch(loadSearchTagsAction());
  }, []);

  useEffect(() => {
    if (addBoardDone) {
      void router.push(
        `/boards/${addBoard.data.category.seq}/${addBoard.data.seq}`
      );
      alert(addBoard.message);
    }
  }, [addBoardDone, router]);

  useEffect(() => {
    if (searchTagsDone) {
      const tempCheckboxes: any = {};
      for (const searchtag of searchTags) {
        if (!tempCheckboxes[searchtag.seq]) {
          tempCheckboxes[searchtag.seq] = { checked: false };
        } else {
          tempCheckboxes[searchtag.seq].checked = false;
        }

        if (searchTagDatas) {
          for (const searchTagData of searchTagDatas) {
            if (tempCheckboxes[searchTagData.seq]) {
              tempCheckboxes[searchTagData.seq].checked = true;
            }
          }
        }
      }
      setCheckboxes(tempCheckboxes);
    }
  }, [searchTagsDone]);

  const [title, setTitle] = useState<string>(titleValue);
  const [content, setContent] = useState<string>(contnetValue);
  const [videoUrl, setVideoUrl] = useState<string>(videoUrlValue);
  const [checkboxes, setCheckboxes] = useState<Checkbox>([]);
  const onSubmatAddBoard = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const searchTags: number[] = [];
      for (const checkboxSeq of Object.keys(checkboxes)) {
        if (checkboxes[checkboxSeq]) {
          if (checkboxes[checkboxSeq].checked) {
            searchTags.push(parseInt(checkboxSeq, 10));
          }
        }
      }

      const data = {
        title,
        content,
        videoUrl,
        searchTagSeqs: searchTags,
        categorySeq: 1,
      };
      if (isUpdate) {
        const {
          query: { boardSeq },
        } = router;
        if (boardSeq) {
          dispatch(updateBoardAction(parseInt(boardSeq as string, 10), data));
        }
      } else {
        dispatch(createBoardAction(data));
      }
    },
    [title, content, videoUrl, checkboxes]
  );

  const onChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    []
  );

  const onChangeContent = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value);
    },
    []
  );

  const onChangeVideoUrl = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setVideoUrl(e.target.value);
    },
    []
  );

  const onChangeCheckbox = useCallback(
    (e, searchtagSeq: number) => {
      if (checkboxes) {
        const tempCheckbox: { [k: string]: any } = { ...checkboxes };
        if (tempCheckbox[searchtagSeq]) {
          tempCheckbox[searchtagSeq].checked = e.target.checked;
          setCheckboxes(tempCheckbox);
        }
      }
    },
    [checkboxes]
  );

  return (
    <form
      onSubmit={onSubmatAddBoard}
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <FormItem
        id={'title'}
        text={'제목'}
        type={'text'}
        value={title}
        onChange={onChangeTitle}
        placeholder={'제목을 입력해주세요.'}
      />
      <FormItemTextarea
        id={'content'}
        text={'내용'}
        value={content}
        onChange={onChangeContent}
        placeholder={'내용을 입력해주세요.'}
        height={'100px'}
      />
      <FormItem
        id={'videoUrl'}
        text={'동영상 유튜브 링크'}
        type={'text'}
        value={videoUrl}
        onChange={onChangeVideoUrl}
        placeholder={'유튜브 동영상 링크를 입력해주세요.'}
      />
      <div>
        {searchTags && (
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              height: '100px',
            }}
          >
            {searchTags.map((searchTag: searchTag) => (
              <li key={searchTag.seq}>
                <input
                  type="checkbox"
                  checked={
                    checkboxes[searchTag.seq] &&
                    checkboxes[searchTag.seq].checked
                  }
                  onChange={(e) => onChangeCheckbox(e, searchTag.seq)}
                />
                {searchTag.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      {isUpdate ? (
        <div style={{ width: '100%', textAlign: 'center' }}>
          <Button type={'submit'} color={BLUE_COLOR}>
            수정
          </Button>
          <Button
            type={'button'}
            color={RED_COLOR}
            onClick={() => setIsUpdate(false)}
          >
            수정 취소
          </Button>
        </div>
      ) : (
        <div style={{ width: '100%', textAlign: 'center' }}>
          <Button type={'submit'} color={BLUE_COLOR}>
            등록
          </Button>
        </div>
      )}
    </form>
  );
};

export default AddBoardForm;
