import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import React, { useEffect } from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { FavoritesPage } from '../../../components/pages/favorites/FavoritesPage';
import { Provider } from 'react-redux';
import { demoFavorites } from '../../fixtures/demoFavorites';
import { setFavorites } from '../../../actions/favorite';
import { getFavoritesTracks } from '../../../api/selectors/getFavoritesTracks';

import { act } from 'react-dom/test-utils';
import { demoTracks } from '../../fixtures/demoTracks';



// jest.mock('../../../actions/favorite', () => ({
//     setFavorites: jest.fn()
// }))

// jest.mock('../../../api/selectors/getFavoritesTracks', () => ({
//     getFavoritesTracks: jest.fn().mockResolvedValue({ tracks: [] })
// }))

// .mockImplementation(() => Promise.resolve())






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


const wrapper = mount(
    <Provider store={ store }>
        <MemoryRouter>
            <FavoritesPage />
        </MemoryRouter>
    </Provider>
)


describe('Test FavoritesPage', () => {

    let props;

    beforeEach( () => {
        store = mockStore(initState);
        jest.spyOn(React, 'useEffect').mockImplementation(f => f());

        props = {
            getFavoritesTracks: jest.fn().mockResolvedValue([])
        }

        jest.clearAllMocks();
    })


    test('Should be render FavoritesPage', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('Should be run the action setFavorites', async () => {


        // getFavoritesTracks.mockResolvedValue({ tracks: demoTracks.tracks });

        console.log(wrapper)


        expect( props.getFavoritesTracks ).toHaveBeenCalled();

    })

})