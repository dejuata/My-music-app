import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../components/pages/login/LoginPage'
import { RedirectPage } from '../components/pages/redirect/RedirectPage'
import { RegisterPage } from '../components/pages/register/RegisterPage'


export const AuthRoutes = () => {
    return (
        <div className='auth__container'>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="redirect" element={<RedirectPage />} />

                <Route path="/" element={<Navigate to="login" />} />
            </Routes>
        </div>
    )
}