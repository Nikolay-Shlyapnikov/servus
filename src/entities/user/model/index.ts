import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "../../../app/store";
export const Store = createStore(rootReducer, applyMiddleware(thunk))