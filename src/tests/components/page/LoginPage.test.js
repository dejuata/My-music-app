import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { LoginPage } from "../../../components/pages/login/LoginPage"
import { mount } from 'enzyme';
import { Provider } from "react-redux";

import { MemoryRouter } from 'react-router-dom';

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
        <MemoryRouter>
            <LoginPage />
        </MemoryRouter>
    </Provider>
)

describe('test LoginPage', () => {

    beforeEach( () => {
        store = mockStore(initState)
    })

    test('Should be render LoginPage', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('Should be render <Logo />', () => {

        expect( wrapper.find('Logo').exists() ).toBe( true )

    })

    test('Should be render <LoginForm />', () => {

        expect( wrapper.find('LoginForm').exists() ).toBe( true )

    })

    test('Should be render <LoginButton />', () => {

        expect( wrapper.find('LoginButton').exists() ).toBe( true )

    })
})