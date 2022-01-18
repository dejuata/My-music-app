import { types } from "../types/types";

export const setTracks = (tracks) => ({
    type: types.setTracks,
    payload: tracks
})