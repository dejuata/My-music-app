import { trackReducer } from "../../reducers/trackReducer";
import { types } from "../../types/types";
import { demoTracks } from "../fixtures/demoTracks";



describe('Test trackReducer', () => {

    test('should be return default state', () => {

        const state = trackReducer(demoTracks, {});

        expect( state ).toEqual( demoTracks );
    })

    test('should be return an new state', () => {

        const newState = {
            tracks: [
                {
                    id: '3',
                    name: 'Tus Viejas Cartas',
                    name_short: 'Tus Viejas Cartas',
                    album: "Originales - 20 Exitos",
                    artists: 'Los Enanitos Verdes',
                    duration: '4:47',
                    image: 'https://i.scdn.co/image/ab67616d00001e02b73b130ac6b4b5bef099831a',
                    favorite: true
                }
            ]
        }

        const action = {
            type: types.setTracks,
            payload: newState.tracks
        }

        const state = trackReducer(demoTracks, action);

        expect( state ).toEqual( newState );

    })

    test('should be return an array with the track checked as favorite', () => {

        const action = {
            type: types.addTrackFavorite,
            payload: '1'
        }

        const state = trackReducer(demoTracks, action);
        const track = state.tracks.filter( track => track.id === action.payload)[0]

        expect( track.favorite ).toBe( true );
    })

    test('should be return an array without the track checked as favorite', () => {

        const idTrack = '1';

        const initialState = {
            tracks: demoTracks.tracks.map( track => {
                if ( track.id === idTrack) {
                    track.favorite = true
                }
                return track
            })
        }

        const action = {
            type: types.removeTrackFavorite,
            payload: idTrack
        }

        const state = trackReducer(initialState, action);
        const track = state.tracks.filter( track => track.id === action.payload)[0]

        expect( track.favorite ).toBe( false );
    })

    test('should be execute logout Track', () => {

        const action = {
            type: types.logoutTrack
        }

        const newState = {
            tracks: []
        }

        const state = trackReducer(demoTracks, action);

        expect( state ).toEqual( newState );
    })
})