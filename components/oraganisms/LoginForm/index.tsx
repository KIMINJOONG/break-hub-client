import React, { useCallback, useState } from "react";
import Button from "../../atoms/Button";
import FormItem from "../../molecules/FormItem";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const onSubmitLogin = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("로그인");
  }, []);
  return (
    <form
      onSubmit={onSubmitLogin}
      style={{
        display: "flex",
        width: "100%",
        // maxWidth: "1080px",
        height: "100vh",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <FormItem
        text={"아이디"}
        type={"text"}
        value={id}
        onChange={onChangeId}
        placeholder={"아이디를 입력해주세요."}
      />
      <FormItem
        text={"아이디"}
        type={"text"}
        value={password}
        onChange={onChangePassword}
        placeholder={"비밀번호를 입력해주세요."}
      />
      <div style={{ width: "100%", textAlign: "center" }}>
        <Button type={"submit"} color={"blue"}>
          로그인
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
