import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import reducer from "./reducers";

const middleware = [thunk];
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, applyMiddleware(...middleware));
