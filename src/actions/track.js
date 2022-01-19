import { types } from "../types/types";

export const setTracks = (tracks) => ({
    type: types.setTracks,
    payload: tracks
})

export const addTrackFavorite= (index) => ({
    type: types.addTrackFavorite,
    payload: index
})

export const removeTrackFavorite= (index) => ({
    type: types.removeTrackFavorite,
    payload: index
})