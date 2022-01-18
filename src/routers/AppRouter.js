import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { setTracks } from '../actions/track';
import { useRecommendedTracks } from '../hooks/useRecommendedTracks';
import { AuthRoutes } from './AuthRoutes';
import { HomeRoutes } from './HomeRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const { token, logged } = useSelector(state => state.auth);

    const { data } = useRecommendedTracks('latin')
    const dispatch = useDispatch();

    useEffect(() => {
        if (logged) {
            setIsLoggedIn(true);
            dispatch( setTracks(data) );
        } else {
            setIsLoggedIn(false);
        }
        setChecking(false)
    }, [logged, token, dispatch, data])

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
