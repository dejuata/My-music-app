import React from 'react';
import { shallow } from 'enzyme';
import { SpotifyButton } from '../../../components/atoms/SpotifyButton/SpotifyButton';

describe('Test SpotifyButton', () => {

    const url = 'https://url-track-spotify';

    const wrapper = shallow(
        <SpotifyButton url={ url }/>
    )


    test('Should be render SpotifyButton', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('Should be have the spotify track url', () => {
        const a = wrapper.find('a');

        expect( a.prop('href') ).toBe( url )
    })

})