import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { FavoritesPage } from '../../../components/pages/favorites/FavoritesPage';
import { Provider } from 'react-redux';
import { demoFavorites } from '../../fixtures/demoFavorites';

// jest.mock('../../../api/requests/getFavoritesTracks', () => ({
//     getFavoritesTracks: jest.fn(() => Promise.resolve( [] ))
// }))


const middlewares = [ thunk ]
const mockStore = configureStore(middlewares)

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    favorite: demoFavorites
};

let store = mockStore(initState);
store.dispatch = jest.fn()


// const wrapper = mount(
//     <Provider store={ store }>
//         <MemoryRouter>
//             <FavoritesPage />
//         </MemoryRouter>
//     </Provider>
// )


describe('Test FavoritesPage', () => {

    beforeEach( () => {

        // getFavoritesTracks.mockImplementationOnce(() => {
        //             // setFavorites(demoFavorites.tracks)
        //             return Promise.resolve( demoFavorites.tracks )
        // })

        // jest.clearAllMocks();
    })


    test('Should be render FavoritesPage', () => {

        // expect(wrapper).toMatchSnapshot();

    })


})