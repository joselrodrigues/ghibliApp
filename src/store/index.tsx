import { applyMiddleware, createStore, compose } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "../reducers";

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const middleware = [reduxThunk];

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
