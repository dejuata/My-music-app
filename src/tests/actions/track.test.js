import { addTrackFavorite, logoutTrack, removeTrackFavorite, setTracks } from "../../actions/track";
import { types } from "../../types/types"
import { demoTracks } from "../fixtures/demoTracks";

describe('Test trackActions', () => {

    test('should be all actions work', () => {

        const tracks = demoTracks.tracks;
        const idTrack = '1';

        const setTracksAction = setTracks(tracks);

        expect( setTracksAction ).toEqual({
            type: types.setTracks,
            payload: tracks
        });

        const addTrackFavoriteAction = addTrackFavorite(idTrack);

        expect( addTrackFavoriteAction ).toEqual({
            type: types.addTrackFavorite,
            payload: idTrack
        });

        const removeTrackFavoriteAction = removeTrackFavorite(idTrack);

        expect( removeTrackFavoriteAction ).toEqual({
            type: types.removeTrackFavorite,
            payload: idTrack
        });

        const logoutTrackAction = logoutTrack();

        expect( logoutTrackAction ).toEqual({
            type: types.logoutTrack,
        });
    })
})