import React from 'react'
import { Logo } from '../../atoms/Logo/Logo'
import { RegisterForm } from '../../organisms/RegisterForm/RegisterForm'

export const RegisterPage = () => {
    return (
        <div className='auth-form__container'>
            <Logo />

            <RegisterForm />

        </div>
    )
}
