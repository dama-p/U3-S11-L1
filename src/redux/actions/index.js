export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES"
export const DELETE_FROM_FAVOURITES =  "DELETE_FROM_FAVOURITES"

export const addToFavouritesAction = function (data) {
return {
    type: "ADD_TO_FAVOURITES",
    payload: data,
  };
}