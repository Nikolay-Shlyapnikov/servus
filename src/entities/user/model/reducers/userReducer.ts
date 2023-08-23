import {userState} from "../../types/userState";
import {userActionTypes} from "../../types/userAction";



const defaultUserState: userState = {
    user: null,
    loading: false,
    error: null
}


export const userReducer = (state = defaultUserState, action: userActionTypes):userState => {
    switch (action.type) {
        case CREATE_USER:
        case GET_USER:
        case UPDATE_USER:
        case DELETE_USER:
            return {
                user: null,
                loading: true,
                error: null
            }
        case CREATE_USER_SUCCESS:
        case GET_USER_SUCCESS:
        case UPDATE_USER_SUCCESS:
        case DELETE_USER_SUCCESS:
            return {
                user: action.payload,
                loading: false,
                error: null
            }
        case CREATE_USER_ERROR:
        case GET_USER_ERROR:
        case UPDATE_USER_ERROR:
        case DELETE_USER_ERROR:
            return {
                user: null,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}