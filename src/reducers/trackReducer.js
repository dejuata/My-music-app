import { types } from "../types/types";

const initialState = {
    tracks: []
}

export const trackReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setTracks:
            return {
                ...state,
                tracks: action.payload
            }

        case types.addTrackFavorite:
            return {
                ...state,
                tracks: state.tracks.map(track => {
                    if ( track.id === action.payload ) {
                        track.favorite = true
                    }
                    return track
                })
            }

        case types.removeTrackFavorite:
            return {
                ...state,
                tracks: state.tracks.map(track => {
                    if ( track.id === action.payload ) {
                        track.favorite = false
                    }
                    return track
                })
            }

        case types.logoutTrack:
            return {
                ...state,
                tracks: []
            }

        default:
            return state;
    }
}