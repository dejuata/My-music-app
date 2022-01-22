import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { mount } from 'enzyme';
import { Provider } from "react-redux";

import { MemoryRouter } from 'react-router-dom';
import { RegisterForm } from '../../../components/organisms/RegisterForm/RegisterForm';

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
// store.dispatch = jest.fn()

const wrapper = mount(
    <Provider store={ store }>
        <MemoryRouter>
            <RegisterForm />
        </MemoryRouter>
    </Provider>
)

describe('test RegisterForm', () => {

    beforeEach( () => {
        store = mockStore(initState);
        jest.clearAllMocks();
    })

    test('Should be render RegisterForm', () => {

        expect(wrapper).toMatchSnapshot();

    })

})