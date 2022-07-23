import { createStore } from "redux";
import textReducer from "./reducer";
import { applyMiddleware } from 'redux';
import logger from 'redux-logger'
const store = createStore(textReducer,applyMiddleware(logger))

export default store