import storage from "redux-persist/lib/storage";
import { types } from "../types/types";

const initialState = {
    uid: null,
    name: null,
    type: null,
    token: null,
    expires: null,
    logged: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.name,
                type: action.payload.type,
                token: action.payload.token,
                expires: action.payload.expires,
                logged: true
            }

        case types.logout:
            storage.removeItem('persist:root')
            return {
                uid: null,
                name: null,
                type: null,
                token: null,
                logged: false
            }

        case types.setToken:
            return {
                ...state,
                token: action.payload.access_token,
                expires: action.payload.expires_in
            }

        default:
            return state;
    }
}