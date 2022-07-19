import { createStore, combineReducers, applyMiddleware } from "redux";
import formReducer from "../reducers/formReducer"; //importing reducer to pass in store

import thunk from "redux-thunk";

const configureStore = () => {
  const store = createStore(
    //creating store of redux
    combineReducers({
      //initialing at least one reducer
      formValue: formReducer,
    }),
    applyMiddleware(thunk)
  );

  return store;
};
export default configureStore;
