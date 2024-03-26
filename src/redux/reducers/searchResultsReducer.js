import { GET_RESULTS } from "../actions";

const initialState = {
  content: [],
};

const searchResultsReducer = function (state = initialState, action) {
  switch (action.type) {

    case GET_RESULTS:
        return {
            ...state,
            content: action.payload,
        }




    default:
      return state;
  }
};

export default searchResultsReducer;
