import { createContext, useReducer, useState } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //GGet search results
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();

    // setUsers(data);
    // setLoading(false);
    // console.log(data);
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  //et single user
  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();

      // setUsers(data);
      // setLoading(false);
      // console.log(data);
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };
  //et single REPO
  const getRepos = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    // setUsers(data);
    // setLoading(false);
    // console.log(data);
    dispatch({
      type: "GET_USER",
      payload: data,
    });
  };

  //Clear user from the state
  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
