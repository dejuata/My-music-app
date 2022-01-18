import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from '../components/organisms/Header/Header'
import { Navbar } from '../components/organisms/Navbar/Navbar'
import { FavoritesPage } from '../components/pages/favorites/FavoritesPage'
import { HomePage } from '../components/pages/home/HomePage'
import { TrackPage } from '../components/pages/track/TrackPage'


import '../index.css';


export const HomeRoutes = () => {
    return (
        <>
            <Header />

            <div className='home-container'>
                <Routes>
                    {/* <Route path="favorites" element={<FavoritesPage />} /> */}
                    {/* <Route path="track/:trackId" element={<TrackPage />} /> */}

                    {/* <Route path="/" element={<HomePage />} /> */}
                </Routes>
            </div>

            <div className='home-navbar'>
                <Navbar />
            </div>
        </>
    )
}