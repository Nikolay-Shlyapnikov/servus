import axios from 'axios';
import {domain} from "../../../app/config";
import {userInterface} from "../types/user";

export const CreateUser = (user:userInterface) => {
    return axios.post(`https://${domain}/`, {
    }).then(response => {
        return response.data
    }).catch(error => {
        console.log(error);
    });
}
