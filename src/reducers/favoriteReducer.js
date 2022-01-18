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

        default:
            return state;
    }
}