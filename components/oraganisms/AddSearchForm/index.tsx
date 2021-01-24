import React, { useCallback, useMemo, useState } from "react";
import { BLUE_COLOR } from "../../../utils/theme";
import Button from "../../atoms/Button";
import FormItem from "../../molecules/FormItem";

const AddSearchForm = () => {
  const [addSearchValue, setAddSearchValue] = useState("");
  const [addSearchCode, setAddSearchCode] = useState("");

  const onChangeAddSearchValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAddSearchValue(e.target.value);
    },
    []
  );

  const onChangeAddSearchCode = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAddSearchCode(e.target.value);
    },
    []
  );

  const onSubmitLogin = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("등록");
  }, []);

  const onClickSearch = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {},
    []
  );
  return useMemo(() => {
    return (
      <form
        onSubmit={onSubmitLogin}
        style={{
          display: "flex",
          width: "100%",
          // maxWidth: "1080px",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <FormItem
          id={"addSearchValue"}
          text={"검색조건"}
          type={"text"}
          value={addSearchValue}
          onChange={onChangeAddSearchValue}
          placeholder={"검색조건명을 입력해주세요."}
        />
        <FormItem
          id={"addSearchCode"}
          text={"코드"}
          type={"text"}
          value={addSearchCode}
          onChange={onChangeAddSearchCode}
          placeholder={"코드를 입력해주세요."}
        />
        <div style={{ width: "100%", textAlign: "center" }}>
          <Button type={"submit"} color={BLUE_COLOR}>
            추가
          </Button>
          <Button type={"button"} color={BLUE_COLOR} onClick={onClickSearch}>
            검색
          </Button>
        </div>
      </form>
    );
  }, [addSearchValue, addSearchCode]);
};

export default AddSearchForm;
