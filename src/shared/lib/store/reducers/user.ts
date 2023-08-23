
import {userActionTypes} from "../../../../types/user";
import {userReducerStateInterface} from "../../../../types/user";
import {userAction} from "../../../../types/user";

const initialUserState: userReducerStateInterface = {
    users: [],
    loading: false,
    error: null
}

export const user = (state = initialUserState, action: userAction): userReducerStateInterface =>{
    switch (action.type) {
        case userActionTypes.FETCH_USERS : {
            return {loading: true, error: null, users: []};
        }
        case userActionTypes.FETCH_USERS_SUCCESS :{
            return {loading: false, error: null, users: action.payload}
        }
        case userActionTypes.FETCH_USERS_ERROR : {
            return {loading: false, error: action.payload, users: []}
        }
        default :
            return state
    }
}