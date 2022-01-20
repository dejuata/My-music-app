import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useForm } from '../../../hooks/useForm';
import { startLoginEmailPassword } from '../../../actions/auth';

export const LoginForm = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        email: 'demo@gmail.com',
        password: '123456'
    })

    const { email, password } = formValues;

    const handleLogin = (e) => {
        console.log('handleLogin')
        e.preventDefault();
        dispatch( startLoginEmailPassword(email, password) )
    }

    return (
        <form onSubmit={ handleLogin }>
            <div
                className='form-control mb-2'
            >
                <label
                    className='label'
                >
                    Email address
                </label>

                <input
                    type='email'
                    placeholder='example@email.com'
                    name="email"
                    className='input'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            <div
                className='form-control mb-3'
            >
                <label
                    className='label'
                >
                    Password
                </label>

                <input
                    type='password'
                    placeholder='********'
                    name="password"
                    className='input'
                    autoComplete='off'
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            <button
                type='submit'
                className='btn btn-primary'
            >
                Log in
            </button>

            <Link to="/auth/register" className='auth__link'>
                Create new account
            </Link>
        </form>
    )
}
