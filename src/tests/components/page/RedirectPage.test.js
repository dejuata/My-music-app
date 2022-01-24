import { RedirectPage } from "../../../components/pages/redirect/RedirectPage"
import { mount } from 'enzyme';
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { setToken } from "../../../actions/auth";


jest.mock("../../../actions/auth", () => ({
    setToken: jest.fn(),
}))

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        token: null
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn()

const wrapper = mount(
    <Provider store={ store }>
        <MemoryRouter>
            <RedirectPage />
        </MemoryRouter>
    </Provider>
)

describe('Test RedirectPage', () => {

    test('Should be render RedirectPage', () => {

        expect(wrapper).toMatchSnapshot();

    })

})