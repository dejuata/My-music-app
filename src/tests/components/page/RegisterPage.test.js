import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { mount } from 'enzyme';
import { Provider } from "react-redux";

import { MemoryRouter } from 'react-router-dom';
import { RegisterPage } from '../../../components/pages/register/RegisterPage';

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
            <RegisterPage />
        </MemoryRouter>
    </Provider>
)

describe('test LoginPage', () => {

    beforeEach( () => {
        store = mockStore(initState)
    })

    test('Should be render RegisterPage', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('Should be render <Logo />', () => {

        expect( wrapper.find('Logo').exists() ).toBe( true )

    })

    test('Should be render <RegisterForm />', () => {

        expect( wrapper.find('RegisterForm').exists() ).toBe( true )

    })

})