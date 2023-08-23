export interface userReducerStateInterface {
    users: any[];
    loading: boolean;
    error: null | string;
}
export enum userActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
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