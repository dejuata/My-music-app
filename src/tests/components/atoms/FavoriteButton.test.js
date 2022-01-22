import React from 'react';
import { shallow } from 'enzyme';
import { FavoriteButton } from '../../../components/atoms/FavoriteButton/FavoriteButton';

describe('Test FavoriteButton', () => {

    const handleActive = jest.fn();

    const handleDeactive = jest.fn();

    const state = false;

    const wrapper = shallow(
        <FavoriteButton
            funcActive={ handleActive }
            funcDeactive={ handleDeactive }
            state={ state }
        />
    )


    test('Should be render FavoriteButton', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('Should be change the state to true', () => {

        wrapper.find('button').simulate('click');
        expect( wrapper.find('FaHeart').hasClass('a-favorite__icon--active') ).toBe(true)

    })

    test('Should be change the state to false', () => {

        wrapper.find('button').simulate('click');
        expect( wrapper.find('FaHeart').hasClass('a-favorite__icon--active') ).toBe(false)

    })

    test('Should be execute handleDeactive', () => {
        const wrapper = shallow(
            <FavoriteButton
                funcActive={ handleActive }
                funcDeactive={ handleDeactive }
                state={ true }
            />
        )

        wrapper.find('button').simulate('click');
        expect( handleDeactive ).toHaveBeenCalledTimes(1);
    })

    test('Should be execute handleActive', () => {
        const wrapper = shallow(
            <FavoriteButton
                funcActive={ handleActive }
                funcDeactive={ handleDeactive }
                state={ false }
            />
        )

        wrapper.find('button').simulate('click');
        expect( handleActive ).toHaveBeenCalledTimes(1);
    })


})