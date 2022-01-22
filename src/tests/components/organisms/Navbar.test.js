import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { mount } from 'enzyme';
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../../../components/organisms/Navbar/Navbar";
import { startLogout } from '../../../actions/auth';
import { finishLoading } from '../../../actions/ui';
import { logoutTrack } from '../../../actions/track';

jest.mock('../../../actions/auth', () => ({
    startLogout: jest.fn()
}))

jest.mock('../../../actions/ui', () => ({
    finishLoading: jest.fn()
}))

jest.mock('../../../actions/track', () => ({
    logoutTrack: jest.fn()
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
store.dispatch = jest.fn()

const wrapper = mount(
    <Provider store={ store }>
        <MemoryRouter>
            <Navbar />
        </MemoryRouter>
    </Provider>
)

describe('test Navbar', () => {

    beforeEach( () => {
        store = mockStore(initState);
        // Limpiar mocks
        jest.clearAllMocks();
    })

    test('Should be render Navbar', () => {

        expect(wrapper).toMatchSnapshot();

    })


    test('Should be run the actions of handleLogout', () => {

        wrapper.find('FaPowerOff').simulate('click')

        expect( startLogout ).toHaveBeenCalledTimes(1);
        expect( finishLoading ).toHaveBeenCalledTimes(1);
        expect( logoutTrack ).toHaveBeenCalledTimes(1);

    })
});