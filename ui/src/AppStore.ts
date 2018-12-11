import {createStore,compose, applyMiddleware} from "redux";
import { reducer} from "./AppActions";
import thunk from "redux-thunk";

declare global {
  interface Window {
    [key: string]: any;
  }
}

const middleware = [thunk];

export const appStore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(applyMiddleware(...middleware))
);
