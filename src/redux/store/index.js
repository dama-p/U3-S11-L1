import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import searchResultsReducer from "../reducers/searchResultsReducer";

const unifiedReducer = combineReducers({
  favourites: favouritesReducer,
  searchResults: searchResultsReducer,
});

const store = configureStore({ reducer: unifiedReducer });

export default store;
