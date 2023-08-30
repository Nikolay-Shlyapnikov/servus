import {combineReducers} from "redux";
import {userReducer} from "../../entities/user/model/reducers/userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    // param: paramReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>