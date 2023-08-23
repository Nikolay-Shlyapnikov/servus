import axios from 'axios';
import {domain} from "../../../app/config";
import {userInterface} from "../types/user";

export const GetUser = (user:userInterface) => {
    return axios.get(`https://${domain}/user/${user.id}`, {
    }).then(response => {
        return response.data
    }).catch(error => {
        console.log(error);
    });
}
