import {userInterface} from "./user";
import {Error} from "./error";
export interface userState {
    user: userInterface | null
    loading: boolean
    error: Error | null
}