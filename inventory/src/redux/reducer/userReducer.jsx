const initialState = {
  user: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      state.user = action.payload;
      return state;

    case "LOGOUT":
      state.user = null;
      return state;

    default:
      return state;
  }
};

export default userReducer;
