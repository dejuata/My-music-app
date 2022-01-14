import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignInPage } from '../components/pages/signin/SignInPage'
import { SignUpPage } from '../components/pages/signup/SignUpPage'


export const AuthRoutes = () => {
    return (
        <>
            <Routes>
                {/* <Route path="sign-in" element={<SignInPage />} /> */}
                {/* <Route path="sign-up" element={<SignUpPage />} /> */}

                <Route path="/" element={<SignInPage />} />
            </Routes>
        </>
    )
}