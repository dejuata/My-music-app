import { types } from "../types/types";

const initialState = {
    uid: null,
    name: null,
    type: null,
    token: null,
    logged: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
                type: action.payload.type,
                token: action.payload.token,
                logged: true
            }

        case types.logout:
            return {
                uid: null,
                name: null,
                type: null,
                token: null,
                logged: false
            }

        default:
            return state;
    }
}