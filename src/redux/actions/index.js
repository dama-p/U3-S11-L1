export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const DELETE_FROM_FAVOURITES = "DELETE_FROM_FAVOURITES";
export const GET_RESULTS = "GET_RESULTS";

export const addToFavouritesAction = function (data) {
  return {
    type: ADD_TO_FAVOURITES,
    payload: data,
  };
};

export const deleteFromFavoritesAction = function (index) {
  return {
    type: DELETE_FROM_FAVOURITES,
    payload: index,
  };
};

export const getSearchResultsAction = (query) => {
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  return (dispatch, getState) => {
    fetch(baseEndpoint + query + "&limit=20")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dati");
        }
      })
      .then((results) => {
        dispatch({
          type: GET_RESULTS,
          payload: results.data,
        });
      })

      .catch((error) => {
        console.log("ERRORE", error);
      });
  };
};
