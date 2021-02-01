import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from "./reducer"
export default createStore(
  reducers,composeWithDevTools(applyMiddleware(thunk))
);