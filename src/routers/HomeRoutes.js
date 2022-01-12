import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FavoritesPage } from '../components/pages/favorites/FavoritesPage'
import { HomePage } from '../components/pages/home/HomePage'


export const HomeRoutes = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className='container'>
                <Routes>
                    <Route path="home" element={<HomePage />} />
                    <Route path="favorites" element={<FavoritesPage />} />

                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </>
    )
}