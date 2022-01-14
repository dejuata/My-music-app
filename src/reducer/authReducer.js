import { authType } from "../types/authType";


export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case authType.login:
            return {
                ...action.payload,
                logged: true
            }

        case authType.logout:
            return {
                logged: false
            }

        default:
            return state;
    }
}