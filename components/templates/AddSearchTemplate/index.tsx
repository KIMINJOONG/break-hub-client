import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import styled from 'styled-components';
import {
  loadSearchRequirementsAction,
  onChangeAddSearchAction,
  removeSearchRequirementAction,
  updateSearchRequirementAction,
} from '../../../actions/searchRequirement/action';
import { LOAD_SEARCH_REQUIREMENTS_REQUEST } from '../../../actions/searchRequirement/type';
import { RootState } from '../../../reducers';
import wrapper from '../../../stores/configureStore';
import { searchRequirement } from '../../../type/server';
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
  const { searchRequirements } = useSelector(
    (state: RootState) => state.searchRequirement
  );

  useEffect(() => {
    dispatch(loadSearchRequirementsAction());
  }, []);

  const onClickUpdate = (index: number, seq: number) => {
    const data: searchRequirement = {
      seq: searchRequirements[index].seq,
      name: searchRequirements[index].name,
      code: searchRequirements[index].code,
      createdAt: '',
    };
    console.log(`index : ${index}`);
    console.log(searchRequirements);
    console.log(searchRequirements[index]);
    // dispatch(updateSearchRequirementAction(seq, data));
  };

  const onClickRemove = useCallback((seq) => {
    dispatch(removeSearchRequirementAction(seq));
  }, []);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      e.persist();
      dispatch(onChangeAddSearchAction(index, e));
    },
    []
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
          width: '30%',
          height: '100vh',
          border: '1px solid red',
          boxSizing: 'border-box',
        }}
      >
        <SideMenuList />
      </div>
      <div
        style={{
          display: 'flex',
          padding: '10px',
          width: '70%',
          border: '1px solid blue',
          boxSizing: 'border-box',
          flexWrap: 'wrap',
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
              <td style={{ border: '1px solid black', padding: '10px' }}>
                코드명
              </td>
              <td>기능</td>
            </tr>
          </thead>
          <tbody>
            {searchRequirements &&
              searchRequirements.map(
                (searchRequirement: searchRequirement, index: number) => (
                  <tr
                    key={searchRequirement.seq}
                    style={{ border: '1px solid black', padding: '10px' }}
                  >
                    <td style={{ border: '1px solid black', padding: '10px' }}>
                      <Input
                        id={`searchRequirementValue_${searchRequirement.seq}`}
                        name={'name'}
                        onChange={(e) => onChange(e, index)}
                        value={searchRequirement.name}
                      />
                    </td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>
                      <Input
                        id={`searchRequirementCode_${searchRequirement.seq}`}
                        name={'code'}
                        onChange={(e) => onChange(e, index)}
                        value={searchRequirement.code}
                      />
                    </td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>
                      <Button
                        type={'button'}
                        color={BLUE_COLOR}
                        onClick={() =>
                          onClickUpdate(index, searchRequirement.seq)
                        }
                      >
                        수정
                      </Button>
                      <Button
                        type={'button'}
                        color={RED_COLOR}
                        onClick={() => onClickRemove(searchRequirement.seq)}
                      >
                        삭제
                      </Button>
                    </td>
                  </tr>
                )
              )}
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
      type: LOAD_SEARCH_REQUIREMENTS_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default AddSearchTemplate;
