import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { AppRouter } from '../../routers/AppRouter';


const middlewares = [ thunk ]
const mockStore = configureStore(middlewares)

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
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


})