import {userInterface} from "./user";
import {Error} from "./error";
export enum userActionTypes {
    GET_USER = 'GET_USER',
    GET_USER_SUCCESS = 'GET_USER_SUCCESS',
    GET_USER_ERROR = 'GET_USER_ERROR',
}
interface GetUsersActionInterface {
    type: userActionTypes.GET_USER;
}
interface GetUsersSuccessActionInterface {
    type: userActionTypes.GET_USER_SUCCESS;
    payload: userInterface;
}

interface GetUsersErrorActionInterface {
    type: userActionTypes.GET_USER_ERROR;
    payload: Error;
}
export type userAction = GetUsersActionInterface | GetUsersSuccessActionInterface | GetUsersErrorActionInterface