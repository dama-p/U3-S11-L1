const initialState = {
  content: [],
};

const favouritesReducer = function (state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        content: state.content.concat(action.payload),
      };

    case "DELETE_FROM_FAVOURITES":
      return {
        ...state,
        content: state.content.filter((fav, index) => index !== action.payload),
      };

    default:
      return state;
  }
};

export default favouritesReducer;
