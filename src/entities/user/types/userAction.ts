export enum userActionTypes {
    CREATE_USER = 'CREATE_USER',
    CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS',
    CREATE_USER_ERROR = 'CREATE_USER_ERROR',
    GET_USER = 'GET_USER',
    GET_USER_SUCCESS = 'GET_USER_SUCCESS',
    GET_USER_ERROR = 'GET_USER_ERROR',
    UPDATE_USER = 'UPDATE_USER',
    UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS',
    UPDATE_USER_ERROR = 'UPDATE_USER_ERROR',
    DELETE_USER = 'DELETE_USER',
    DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS',
    DELETE_USER_ERROR = 'DELETE_USER_ERROR'
}
interface FetchUsersActionInterface {
    type: userActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessActionInterface {
    type: userActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface FetchUsersErrorActionInterface {
    type: userActionTypes.FETCH_USERS_ERROR;
    payload: string;
}
export type userAction = FetchUsersActionInterface | FetchUsersSuccessActionInterface | FetchUsersErrorActionInterface