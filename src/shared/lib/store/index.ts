import {createStore, combineReducers} from "redux";
import {user} from "./reducers/user";

const index = combineReducers({
    user: user
});

export const store = createStore(index)