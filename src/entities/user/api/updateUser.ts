import axios from 'axios';
import {domain} from "../../../app/config";
import {userInterface} from "../types/user";

export const UpdateUser = (user:userInterface) => {
    return axios.put(`https://${domain}/user`, {
    }).then(response => {
        return response.data
    }).catch(error => {
        console.log(error);
    });
}
