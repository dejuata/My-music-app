import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { login } from '../actions/auth';
import { AuthRoutes } from './AuthRoutes';
import { HomeRoutes } from './HomeRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const { logged } = useSelector(state => state.auth);

    useEffect(() => {
        if (logged) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
        setChecking(false)
    }, [logged])

    if (checking) {
        return (
            <h2>Loading...</h2>
        )
    }

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/auth/*" element={
                    <PublicRoute isAuthenticated = { isLoggedIn }>
                        <AuthRoutes />
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoute isAuthenticated = { isLoggedIn }>
                        <HomeRoutes />
                    </PrivateRoute>
                } />

                <Route path="/*" element={<Navigate to="/auth/login" />} />

            </Routes>
        </BrowserRouter>
    )
}
