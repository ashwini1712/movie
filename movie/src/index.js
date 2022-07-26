import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import "./styles/styles.css";
import { Provider } from "react-redux";
import configureStore from "./Redux/store/configureStore";
const store = configureStore();

store.subscribe(() => {
  console.log("state", store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
