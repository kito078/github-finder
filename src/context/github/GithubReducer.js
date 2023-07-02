// curent state and also an action , an action is typical an an obect that has a type , a type is just a string
const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: UserActivation.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
