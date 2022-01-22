import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { mount } from 'enzyme';
import { Provider } from "react-redux";

import { MemoryRouter } from 'react-router-dom';
import { LoginForm } from '../../../components/organisms/LoginForm/LoginForm';
import { startLoginEmailPassword } from '../../../actions/auth';

// Representar la acción como una función de jest
jest.mock('../../../actions/auth', () => ({
    startLoginEmailPassword: jest.fn()
}))

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
// Poder utilizar el dispatch en pruebas
store.dispatch = jest.fn()

const wrapper = mount(
    <Provider store={ store }>
        <MemoryRouter>
            <LoginForm />
        </MemoryRouter>
    </Provider>
)

describe('test LoginForm', () => {

    beforeEach( () => {
        store = mockStore(initState);
        // Limpiar mocks
        jest.clearAllMocks();
    })

    test('Should be render LoginForm', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('Should be run the action startLoginEmailPassword', () => {

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect( startLoginEmailPassword ).toHaveBeenCalledWith('demo@gmail.com', '123456');

    })

})