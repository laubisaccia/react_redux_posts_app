import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxthunk from "redux-thunk";
import { postsReducer } from "../reducers/postsReducers";

//combine all middlewares
const middlewares = [reduxthunk];
const middlewareEnhancers = applyMiddleware(...middlewares);
const store = createStore(
  postsReducer,
  composeWithDevTools(middlewareEnhancers)
);
export default store;
