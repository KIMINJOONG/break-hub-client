import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END } from "redux-saga";
import styled from "styled-components";
import { loadSearchRequirementsAction } from "../../../actions/searchRequirement/action";
import { LOAD_SEARCH_REQUIREMENT_REQUEST } from "../../../actions/searchRequirement/type";
import { RootState } from "../../../reducers";
import wrapper from "../../../stores/configureStore";
import Span from "../../atoms/Span";
import SideMenuList from "../../oraganisms/SideMenuList";

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

  return (
    <AddSearchComponent>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "50px",
          border: "1px solid black",
          boxSizing: "border-box",
        }}
      >
        <Span>검색조건</Span>
      </div>
      <div
        style={{
          width: "30%",
          height: "100vh",
          border: "1px solid red",
          boxSizing: "border-box",
        }}
      >
        <SideMenuList />
      </div>
      <div
        style={{
          display: "flex",
          padding: "10px",
          width: "70%",
          border: "1px solid blue",
          boxSizing: "border-box",
        }}
      >
        <table
          style={{
            width: "100%",
            textAlign: "center",
            border: "1px solid black",
            boxSizing: "border-box",
            borderCollapse: "collapse",
            borderSpacing: "a",
          }}
        >
          <tr style={{ border: "1px solid black", padding: "10px" }}>
            <td style={{ border: "1px solid black", padding: "10px" }}>
              검색조건 명
            </td>
            <td style={{ border: "1px solid black", padding: "10px" }}>
              코드명
            </td>
          </tr>
          {searchRequirements &&
            searchRequirements.map((searchRequirement: any, index: number) => (
              <tr
                key={index}
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {searchRequirement.name}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {searchRequirement.code}
                </td>
              </tr>
            ))}
        </table>
      </div>
    </AddSearchComponent>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context: any) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Authorization = "";
    axios.defaults.withCredentials = true;
    if (context.req && cookie) {
      axios.defaults.headers.Authorization = cookie;
    }
    context.store.dispatch({
      type: LOAD_SEARCH_REQUIREMENT_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default AddSearchTemplate;
