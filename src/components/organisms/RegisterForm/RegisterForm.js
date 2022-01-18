import React from 'react'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { startRegisterWithEmailPasswordName } from '../../../actions/auth';
import { removeError, setError } from '../../../actions/ui';
import { useForm } from '../../../hooks/useForm'

export const RegisterForm = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui)

    const [ formValues, handleInputChange ] = useForm({
        name: 'Juan David',
        email: 'demo1@gmail.com',
        password: '123456',
        password2: '123456'
    })

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if ( isFormValid() ) {
            dispatch( startRegisterWithEmailPasswordName(email, password, name) )
        }
    }

    const isFormValid = () => {

        if ( name.trim().length === 0) {
            dispatch(setError('Name is required'));
            return false;
        } else if ( !validator.isEmail( email ) ) {
            dispatch(setError('Email is not valid'));
            return false;
        } else if ( password !== password2 || password.length < 5) {
            dispatch(setError('Password should be a least 6 characters and match each other'));
            return false;
        }

        dispatch(removeError())
        return true
    }

    return (
        <form onSubmit={ handleRegister }>

            <div className='alert alert-error'>
                { msgError }
            </div>

            <div
                className='form-control mb-2'
            >
                <label
                    className='label'
                >
                    Name
                </label>

                <input
                    type='text'
                    placeholder='Your name'
                    name="name"
                    className='input'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

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
                className='form-control mb-2'
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

            <div
                className='form-control mb-3'
            >
                <label
                    className='label'
                >
                    Confirm Password
                </label>

                <input
                    type='password'
                    placeholder='********'
                    name="password2"
                    className='input'
                    autoComplete='off'
                    value={ password2 }
                    onChange={ handleInputChange }
                />
            </div>

            <button
                type='submit'
                className='btn btn-primary'
            >
                Sign Up
            </button>

            <Link to="/auth/login" className='auth__link'>
                Already registered ?
            </Link>
        </form>
    )
}
