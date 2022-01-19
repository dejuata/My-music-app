import { types } from "../types/types";

export const setFavorites = (payload) => ({
    type: types.setFavorites,
    payload
})

export const removeFavorite= (index) => ({
    type: types.removeFavorite,
    payload: index
})