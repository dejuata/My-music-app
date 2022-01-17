import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './AuthRoutes';
import { HomeRoutes } from './HomeRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/auth/*" element={
                    // <PublicRoute>
                        <AuthRoutes />
                    // </PublicRoute>
                } />

                <Route path="/*" element={
                    // <PrivateRoute>
                        <HomeRoutes />
                    // </PrivateRoute>
                } />

            </Routes>
        </BrowserRouter>
    )
}
