import { types } from "../types/types";

export const setTracks = (tracks) => ({
    type: types.setTracks,
    payload: tracks
})

export const addTrackFavorite = (id) => ({
    type: types.addTrackFavorite,
    payload: id
})

export const removeTrackFavorite = (id) => ({
    type: types.removeTrackFavorite,
    payload: id
})

export const logoutTrack = () => ({
    type: types.logoutTrack
})