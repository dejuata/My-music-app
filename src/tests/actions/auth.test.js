import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { types } from "../../types/types"
import { login, logout, setToken, startLogout } from "../../actions/auth";
import '@testing-library/jest-dom';

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares)

const initState = {};

let store = mockStore(initState)

describe('Test authActions', () => {

    beforeEach( () => {
        store = mockStore(initState)
    })

    test('should be run all actions', () => {

        const user = {
            uid: '1',
            name: 'Juan David',
            type: 'spotify',
            token: 'abc'
        };

        const loginAction = login(user.uid, user.name, user.type, user.token);

        expect( loginAction ).toEqual({
            type: types.login,
            payload: {
                uid: '1',
                name: 'Juan David',
                type: 'spotify',
                token: 'abc'
            }
        });

        const logoutAction = logout();

        expect( logoutAction ).toEqual({
            type: types.logout
        })

        const setTokenAction = setToken( user.token );

        expect( setTokenAction ).toEqual({
            type: types.setToken,
            payload: user.token
        })

    });

    test('should be run startLogout', async() => {
        await store.dispatch( startLogout() );

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.logout
        })
    })

})