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

        case types.addTrackFavorite:
            state.tracks[action.payload].favorite = true;
            return {
                ...state
            }

        case types.removeFavorite:
            state.tracks[action.payload].favorite = false;
            return {
                ...state
            }

        default:
            return state;
    }
}