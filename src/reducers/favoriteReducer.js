import { types } from "../types/types";

const initialState = {
    tracks: []
}

export const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setFavorites:
            return {
                tracks: action.payload
            }

        case types.removeFavorite:
            state.tracks[action.payload].favorite = false;
            delete state.tracks[action.payload];
            return {
                ...state
            }

        default:
            return state;
    }
}