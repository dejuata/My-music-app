import React, { useContext, useEffect, useState } from 'react'
// import { getUrlLogin } from '../../../api/selectors/getUrlLogin';
import { LoginButton } from '../../atoms/login/LoginButton';
import { Logo } from '../../atoms/Logo/Logo';
import { LoginForm } from '../../organisms/LoginForm/LoginForm';
// import { useLocation, useNavigate } from 'react-router-dom';



// import { AuthContext } from '../../../auth/authContext';
// import { authType } from '../../../types/authType';
// import { getTokenFromUrl } from '../../../api/selectors/getTokenFromUrl';


export const LoginPage = () => {
    console.log('login')
    // const { dispatch } = useContext(AuthContext);
    // const navigate = useNavigate();

    // const loginUrl = getUrlLogin();
    // const { hash } = useLocation();
    // const token = getTokenFromUrl(hash)
    // console.log(token)

    // useEffect(() => {

    //     if (token) {
    //         const action = {
    //             type: authType.login,
    //             payload: {
    //                 token
    //             }
    //         }
    //         console.log(action)
    //         dispatch(action);

    //         navigate('/', {
    //             replace: true
    //         })
    //     } else {
    //         console.log('No se puede loguear')
    //         navigate('/auth', {
    //             replace: true
    //         })
    //     }

    // }, [token])



    return (
        <div className='auth-form__container'>
            <Logo />

            <LoginForm />

            <div className="auth__button">
                <LoginButton
                    // url={ loginUrl }
                />
            </div>
        </div>
    )
}
