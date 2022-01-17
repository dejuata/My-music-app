import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterForm = () => {
    return (
        <form>
            <div
                className='form-control mb-2'
            >
                <label
                    for="name"
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
                />
            </div>

            <div
                className='form-control mb-2'
            >
                <label
                    for="email"
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
                />
            </div>

            <div
                className='form-control mb-2'
            >
                <label
                    for="password"
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
                />
            </div>

            <div
                className='form-control mb-3'
            >
                <label
                    for="password2"
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
                />
            </div>

            <button
                type='submit'
                className='btn btn-primary'
            >
                Sign Up
            </button>

            <Link to="/auth/signup" className='o-login__link'>
                Already registered ?
            </Link>
        </form>
    )
}
