const initialState = {
  favourites: {
    content: [],
  },
};

const mainReducer = function (state = initialState, action) {
  switch (action.type) {

    case "ADD_TO_FAVOURITES":
        return {
            ...state,
            favourites: {
                ...state.favourites,
                content: state.favourites.content.concat(action.payload),
            }
        }

        case "DELETE_FROM_FAVOURITES":
            return {
                ...state,
                favourites: {
                    ...state.favourites,
                    content: state.favourites.content.concat(action.payload),
                }
            }



    default:
      return state;
  }
};

export default mainReducer;
