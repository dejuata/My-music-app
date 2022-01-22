import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import { demoTracks } from '../../fixtures/demoTracks';
import { TrackList } from '../../../components/organisms/TrackList/TrackList';
import { Provider } from 'react-redux';
import { addTrackFavorite, removeTrackFavorite } from '../../../actions/track';
import { demoFavorites } from '../../fixtures/demoFavorites';
import { removeFavorite } from '../../../actions/favorite';

jest.mock('../../../actions/track', () => ({
    addTrackFavorite: jest.fn(),
    removeTrackFavorite: jest.fn()
}))

jest.mock('../../../actions/favorite', () => ({
    removeFavorite: jest.fn(),
}))


const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

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
            <TrackList
                tracks={ demoTracks.tracks }
            />
        </MemoryRouter>
    </Provider>
)

describe('Test TrackList', () => {

    beforeEach( () => {
        store = mockStore(initState);
        jest.clearAllMocks();
    })

    test('Should be render TrackList', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('Should be render two <TrackCard />', () => {

        expect( wrapper.find('TrackCard').length ).toBe( demoTracks.tracks.length )

    })

    test('Should be run the action addTrackFavorite', () => {

        let store = mockStore(initState);
        store.dispatch = jest.fn()

        const wrapper = mount(
            <Provider store={ store }>
                <MemoryRouter>
                    <TrackList
                        tracks={ [ demoTracks.tracks[0] ] }
                    />
                </MemoryRouter>
            </Provider>
        )

        wrapper.find('FavoriteButton').simulate('click')

        expect( addTrackFavorite ).toHaveBeenCalledWith('1');

    })

    test('Should be run the action removeTrackFavorite', () => {

        let store = mockStore(initState);
        store.dispatch = jest.fn()
        let track = demoTracks.tracks[0];
        track.favorite = true;

        const wrapper = mount(
            <Provider store={ store }>
                <MemoryRouter>
                    <TrackList
                        tracks={ [ track ] }
                    />
                </MemoryRouter>
            </Provider>
        )

        wrapper.find('FavoriteButton').simulate('click')

        expect( removeTrackFavorite ).toHaveBeenCalledWith('1');

    })

    test('Should be run the action removeFavorite', () => {

        let store = mockStore(initState);
        store.dispatch = jest.fn()

        const wrapper = mount(
            <Provider store={ store }>
                <MemoryRouter>
                    <TrackList
                        tracks={ [ demoFavorites.tracks[0] ] }
                    />
                </MemoryRouter>
            </Provider>
        )

        wrapper.find('FavoriteButton').simulate('click')

        expect( removeFavorite ).toHaveBeenCalledWith('1');

    })

})