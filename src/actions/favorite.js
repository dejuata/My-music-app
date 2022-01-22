import { types } from "../types/types";

export const setFavorites = (payload) => ({
    type: types.setFavorites,
    payload
})

export const removeFavorite= (payload) => ({
    type: types.removeFavorite,
    payload
})