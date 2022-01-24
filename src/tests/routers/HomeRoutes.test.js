import { HomeRoutes } from "../../routers/HomeRoutes";
import { mount } from 'enzyme';
import { Provider } from "react-redux";

import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import React from "react";

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares)

const initState = {
    auth: {
        logged: true
    },
    track: {
        tracks: []
    },
    favorite: {
        tracks: []
    }
};

let store = mockStore(initState);


describe('Test HomeRoutes', () => {

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('Should be render HomePage', () => {

        const wrapper = mount(
            <Provider store={ store }>
                <MemoryRouter initialEntries={ [ '/']}>
                    <HomeRoutes load={ false }/>
                </MemoryRouter>
            </Provider>
        )

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('HomePage').exists() ).toBe( true );

    })

    test('Should be render FavoritesPage', () => {

        const wrapper = mount(
            <Provider store={ store }>
                <MemoryRouter initialEntries={ [ '/favorites']}>
                    <HomeRoutes load={ false } /> 
                </MemoryRouter>
            </Provider>
        )

        expect(wrapper).toMatchSnapshot(); 
        expect( wrapper.find('FavoritesPage').exists() ).toBe( true );

    })
})