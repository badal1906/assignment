
const initialState = []

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DETAILS":
        state = [...state,action.payload]
        return state;
    case "UPDATE_DETAILS":
      const updateState = state.map(data=>data.id === action.payload.id? action.payload:data)
      state = updateState;
      return state;

    case "DELETE_CONTACT":
      const filterData = state.filter((data=> data.id !== action.payload && data))
      state= filterData;
      return state
    default:
      return state;
  }
};


export default detailReducer