import "./css/index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import allReducer from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(allReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
