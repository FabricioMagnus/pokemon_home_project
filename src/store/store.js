import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  favorites: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav !== action.payload),
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
