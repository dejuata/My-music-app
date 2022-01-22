import { favoriteReducer } from "../../reducers/favoriteReducer"
import { types } from "../../types/types";
import { demoFavorites } from "../fixtures/demoFavorites";



describe('Test favoriteReducer', () => {

    test('should be return default state', () => {

        const state = favoriteReducer(demoFavorites, {});

        expect( state ).toEqual( demoFavorites );
    })

    test('should be return an array without the favorite track', () => {

        const newState = {
            tracks: [ demoFavorites.tracks[0] ]
        }

        const action = {
            type: types.removeFavorite,
            payload: '2'
        }

        const state = favoriteReducer(demoFavorites, action);

        expect( state.tracks.length ).toBe( 1 );
        expect( state ).toEqual( newState );
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
            type: types.setFavorites,
            payload: newState.tracks
        }

        const state = favoriteReducer(demoFavorites, action);

        expect( state ).toEqual( newState );

    })
})