import axios from 'axios';
import {domain} from "../../../app/config";
import {userInterface} from "../types/user";

export const DeleteUser = (user:userInterface) => {
    return axios.delete(`https://${domain}/`, {
    }).then(response => {
        return response.data
    }).catch(error => {
        console.log(error);
    });
}
