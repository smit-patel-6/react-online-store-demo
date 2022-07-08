import { usersType } from "../Reducers/reducers";

export const addUser = (user:usersType) => {
    return {
        type: 'ADD_USER',
        payload: user
    }
}