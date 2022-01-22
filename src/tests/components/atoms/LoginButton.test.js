import React from 'react';
import { shallow, mount } from 'enzyme';
import { LoginButton } from '../../../components/atoms/login/LoginButton';

describe('Test LoginButton', () => {

    const url = 'https://localhost:3000/url-authorization-spotify';

    const wrapper = shallow(
        <LoginButton url={ url }/>
    )


    test('Should be render LoginButton', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('Should be have the login url', () => {
        const a = wrapper.find('a');

        expect( a.prop('href') ).toBe( url )
    })

})