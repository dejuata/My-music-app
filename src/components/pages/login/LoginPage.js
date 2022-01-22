import React from 'react';

import { getUrlLogin } from '../../../api/selectors/getUrlLogin';
import { LoginButton } from '../../atoms/login/LoginButton';
import { Logo } from '../../atoms/Logo/Logo';
import { LoginForm } from '../../organisms/LoginForm/LoginForm';


export const LoginPage = () => {

    const loginUrl = getUrlLogin();

    return (
        <div className='auth-form__container'>
            <Logo />

            <LoginForm />

            <div className="auth__button">
                <LoginButton
                    url={ loginUrl }
                />
            </div>
        </div>
    )
}
