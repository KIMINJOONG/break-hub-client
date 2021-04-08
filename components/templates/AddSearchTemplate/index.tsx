import axios from 'axios';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import styled from 'styled-components';
import {
  loadSearchTagsAction,
  onChangeAddSearchAction,
  removeSearchTagAction,
  updateSearchTagAction,
} from '../../../actions/searchTag/action';
import { LOAD_SEARCH_TAGS_REQUEST } from '../../../actions/searchTag/type';
import { RootState } from '../../../reducers';
import wrapper from '../../../stores/configureStore';
import { searchTag } from '../../../type/server';
import { BLUE_COLOR, RED_COLOR } from '../../../utils/theme';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Span from '../../atoms/Span';
import AddSearchForm from '../../oraganisms/AddSearchForm';
import SideMenuList from '../../oraganisms/SideMenuList';

const AddSearchComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AddSearchTemplate = () => {
  const dispatch = useDispatch();
  const { searchTags } = useSelector((state: RootState) => state.searchTag);

  useEffect(() => {
    dispatch(loadSearchTagsAction());
  }, []);

  const onClickUpdate = useCallback(
    (seq: number) => {
      const targetIndex: number = searchTags.findIndex(
        (item: searchTag) => seq === item.seq
      );

      const data: searchTag = {
        seq: searchTags[targetIndex].seq,
        name: searchTags[targetIndex].name,
        createdAt: '',
      };
      dispatch(updateSearchTagAction(seq, data));
    },
    [searchTags]
  );

  const onClickRemove = useCallback(
    (seq) => {
      dispatch(removeSearchTagAction(seq));
    },
    [searchTags]
  );

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, seq: number) => {
      e.persist();
      dispatch(onChangeAddSearchAction(e, seq));
    },
    [searchTags]
  );

  return (
    <AddSearchComponent>
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
        <Span>검색조건</Span>
      </div>
      <div
        style={{
          width: '100%',
          border: '1px solid red',
          boxSizing: 'border-box',
        }}
      >
        <SideMenuList />
      </div>
      <div
        style={{
          width: '100%',
          border: '1px solid blue',
          boxSizing: 'border-box',
        }}
      >
        <div>
          <AddSearchForm />
        </div>
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
                검색조건 명
              </td>
              <td>기능</td>
            </tr>
          </thead>
          <tbody>
            {searchTags &&
              (searchTags.map((searchTag: searchTag) => (
                <tr
                  key={searchTag.seq}
                  style={{ border: '1px solid black', padding: '10px' }}
                >
                  <td style={{ border: '1px solid black', padding: '10px' }}>
                    <Input
                      id={`searchTagValue_${searchTag.seq}`}
                      name={'name'}
                      onChange={(e) => onChange(e, searchTag.seq)}
                      value={searchTag.name}
                    />
                  </td>
                  <td style={{ border: '1px solid black', padding: '10px' }}>
                    <Button
                      type={'button'}
                      color={BLUE_COLOR}
                      onClick={() => onClickUpdate(searchTag.seq)}
                    >
                      수정
                    </Button>
                    <Button
                      type={'button'}
                      color={RED_COLOR}
                      onClick={() => onClickRemove(searchTag.seq)}
                    >
                      삭제
                    </Button>
                  </td>
                </tr>
              )) as Array<searchTag>)}
          </tbody>
        </table>
      </div>
    </AddSearchComponent>
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
      type: LOAD_SEARCH_TAGS_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default AddSearchTemplate;
