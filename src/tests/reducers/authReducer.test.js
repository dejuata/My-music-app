import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";


describe('Test authReducer', () => {

    const initialState = {
        uid: null,
        name: null,
        type: null,
        token: null,
        logged: false
    }

    test('should be login', () => {

        const action = {
            type: types.login,
            payload: {
                uid: '1',
                name: 'Juan David',
                type: 'spotify',
                token: 'abc',
            }
        }

        const state = authReducer(initialState, action);

        expect( state ).toEqual( {
            uid: '1',
            name: 'Juan David',
            type: 'spotify',
            token: 'abc',
            logged: true
        } );
    })

    test('should be logout', () => {

        const newState = {
            uid: null,
            name: null,
            type: null,
            token: null,
            logged: false
        }

        const action = {
            type: types.logout,
            payload: 'abc'
        }

        const state = authReducer(initialState, action);

        expect( state ).toEqual( newState );
    })

    test('should be setToken', () => {

        const initialState = {
            token: null
        }

        const action = {
            type: types.setToken,
            payload: 'abc'
        }

        const state = authReducer(initialState, action);
        console.log('->', state)
        expect( state ).toEqual( {
            token: 'abc'
        } );
    })

    test('should be return default state', () => {

        const state = authReducer(initialState, {});

        expect( state ).toEqual( initialState );
    })

})