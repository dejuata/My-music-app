import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import { mount } from 'enzyme';
import { Provider } from "react-redux";
import { Header } from "../../../components/organisms/Header/Header";

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares)

const initState = {
    auth: {
        name: 'Juan David'
    },
    ui: {
        loading: false,
        msgError: null
    }
};

let store = mockStore(initState);

describe('test Header', () => { 

    const wrapper = mount(
        <Provider store={ store }>
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        </Provider>
    )

    test('should be render Header', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('should be display name user', () => {

        expect( wrapper.find('p').prop('children') ).toBe( initState.auth.name )

    })
})