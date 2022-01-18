import { types } from "../types/types";

const initialState = {
    tracks: []
}

export const trackReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setTracks:
            return {
                tracks: action.payload
            }

        default:
            return state;
    }
}