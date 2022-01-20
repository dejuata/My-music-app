import { types } from "../types/types";

const initialState = {
    tracks: []
}

export const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setFavorites:
            return {
                ...state,
                tracks: action.payload
            }

        case types.removeFavorite:
            return {
                ...state,
                tracks: state.tracks.filter( track => track.id !== action.payload)
            }

        default:
            return state;
    }
}