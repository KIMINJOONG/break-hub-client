import React, { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchTagAction } from '../../../actions/searchRequirement/action';
import { RootState } from '../../../reducers';
import { BLUE_COLOR } from '../../../utils/theme';
import Button from '../../atoms/Button';
import FormItem from '../../molecules/FormItem';

const AddSearchForm = () => {
  const dispatch = useDispatch();
  const { searchRequirements } = useSelector(
    (state: RootState) => state.searchRequirement
  );
  const [addSearchValue, setAddSearchValue] = useState('');

  const onChangeAddSearchValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAddSearchValue(e.target.value);
    },
    []
  );

  const onSubmitLogin = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = {
        seq: searchRequirements.length + 1,
        name: addSearchValue,
        createdAt: '2021-03-14',
      };
      dispatch(addSearchTagAction(data));
    },
    [addSearchValue]
  );

  const onClickSearch = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {},
    []
  );
  return useMemo(() => {
    return (
      <form
        onSubmit={onSubmitLogin}
        style={{
          display: 'flex',
          width: '100%',
          // maxWidth: "1080px",
          justifyContent: 'center',
          justifyItems: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}
      >
        <FormItem
          id={'addSearchValue'}
          text={'검색조건'}
          type={'text'}
          value={addSearchValue}
          onChange={onChangeAddSearchValue}
          placeholder={'검색조건명을 입력해주세요.'}
        />
        <div style={{ width: '100%', textAlign: 'center' }}>
          <Button type={'submit'} color={BLUE_COLOR}>
            추가
          </Button>
          <Button type={'button'} color={BLUE_COLOR} onClick={onClickSearch}>
            검색
          </Button>
        </div>
      </form>
    );
  }, [addSearchValue]);
};

export default AddSearchForm;
