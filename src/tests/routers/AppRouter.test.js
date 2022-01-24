import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { AppRouter } from '../../routers/AppRouter';


const middlewares = [ thunk ]
const mockStore = configureStore(middlewares)

const initState = {
    auth: {
        logged: false
    }
};

let store = mockStore(initState);

const wrapper = mount(
    <Provider store={ store }>
        <AppRouter />
    </Provider>
)

describe('Test AppRouter', () => {

    test('Should be render AppRouter', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('Should be render AuthRoutes if not is logged', () => {

        expect( wrapper.find('AuthRoutes').exists() ).toBe( true );
        expect( wrapper.find('HomeRoutes').exists() ).toBe( false );

    })

    test('Should be render HomeRoutes if is logged', () => {

        let store = mockStore({
            auth: {
                logged: true
            }
        });

        const wrapper = mount(
            <Provider store={ store }>
                <AppRouter />
            </Provider>
        )

        expect( wrapper.find('AuthRoutes').exists() ).toBe( false );
        expect( wrapper.find('HomeRoutes').exists() ).toBe( true );

    })


})