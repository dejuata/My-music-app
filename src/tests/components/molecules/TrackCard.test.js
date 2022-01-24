import React from 'react';
import { mount } from 'enzyme';
import { TrackCard } from '../../../components/molecules/TrackCard/TrackCard';
import { demoTracks } from '../../fixtures/demoTracks';
import { MemoryRouter } from 'react-router-dom';

describe('Test TrackCard', () => {

    const track = demoTracks.tracks[0];
    const handleActive = jest.fn();
    const handleDeactive = jest.fn();

    const wrapper = mount(
        <MemoryRouter>
            <TrackCard
                track={ track }
                handleActive={ handleActive }
                handleDeactive={ handleDeactive }
                />
        </MemoryRouter>
    )

    test('Should be render TrackCard', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('Should be render <FavoriteButton />', () => {

        expect( wrapper.find('FavoriteButton').exists() ).toBe(true);

    })

})