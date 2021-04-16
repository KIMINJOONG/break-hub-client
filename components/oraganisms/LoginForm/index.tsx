import { useRouter } from 'next/dist/client/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logInAction } from '../../../actions/user/action';
import { RootState } from '../../../reducers';
import { BLUE_COLOR } from '../../../utils/theme';
import Button from '../../atoms/Button';
import FormItem from '../../molecules/FormItem';

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logInMessage, logInDone } = useSelector(
    (state: RootState) => state.user
  );

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const onSubmitLogin = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = {
        email,
        password,
      };
      dispatch(logInAction(data));
    },
    [email, password]
  );

  useEffect(() => {
    if (logInDone) {
      alert(logInMessage);
      void router.push(`/main`);
    }
  }, [logInDone]);
  return (
    <form
      onSubmit={onSubmitLogin}
      style={{
        display: 'flex',
        width: '100%',
        // maxWidth: "1080px",
        height: '100vh',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <FormItem
        id={'id'}
        text={'아이디'}
        type={'text'}
        value={email}
        onChange={onChangeEmail}
        placeholder={'아이디를 입력해주세요.'}
      />
      <FormItem
        id={'password'}
        text={'비밀번호'}
        type={'password'}
        value={password}
        onChange={onChangePassword}
        placeholder={'비밀번호를 입력해주세요.'}
      />
      <div style={{ width: '100%', textAlign: 'center' }}>
        <Button type={'submit'} color={BLUE_COLOR}>
          로그인
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
