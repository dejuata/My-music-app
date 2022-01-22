import React from 'react';
import { shallow } from 'enzyme';
import { Logo } from '../../../components/atoms/Logo/Logo';

describe('Test Logo', () => {

    const wrapper = shallow(
        <Logo />
    )


    test('Should be render Logo', () => {

        expect(wrapper).toMatchSnapshot();

    })

})