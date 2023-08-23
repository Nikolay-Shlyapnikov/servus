import {userInterface} from "../../types/user";
export const getFullName = (user:userInterface) => {
    return `${user.lastName} ${user.firstName}  ${user.middleName}`;
}