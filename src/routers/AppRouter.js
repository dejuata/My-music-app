import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './AuthRoutes';
import { HomeRoutes } from './HomeRoutes';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/auth/*" element={ <AuthRoutes /> } />

                <Route path="/*" element={ <HomeRoutes /> } />

            </Routes>
        </BrowserRouter>
    )
}
