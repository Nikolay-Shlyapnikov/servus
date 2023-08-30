import {userState} from "../../types/userState";
import {userAction} from "../../types/userAction";
import {userActionTypes} from "../../types/userAction";


const defaultUserState: userState = {
    user: null,
    loading: false,
    error: null
}

export const userReducer = (state = defaultUserState, action: userAction):userState => {
    switch (action.type) {
        case userActionTypes.GET_USER:
            return {
                user: null,
                loading: true,
                error: null
            }
        case userActionTypes.GET_USER_SUCCESS:
            return {
                user: action.payload,
                loading: false,
                error: null
            }
        case userActionTypes.GET_USER_ERROR:
            return {
                user: null,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}