import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { setTracks } from '../actions/track'
import { getRecommendedTracks } from '../api/selectors/getRecommendedTracks'
import { Header } from '../components/organisms/Header/Header'
import { Navbar } from '../components/organisms/Navbar/Navbar'
import { FavoritesPage } from '../components/pages/favorites/FavoritesPage'
import { HomePage } from '../components/pages/home/HomePage'
import { TrackPage } from '../components/pages/track/TrackPage'


export const HomeRoutes = () => {

    const { token, logged } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        getRecommendedTracks('latin', token)
            .then( data => {
                dispatch( setTracks(data) );
            })
    }, [ dispatch, token ])

    return (
        <>
            <Header />

            <div className='home__container'>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="favorites" element={<FavoritesPage />} />
                    <Route path="track/:trackId" element={<TrackPage />} />

                </Routes>
            </div>

            <div className='home__navbar'>
                <Navbar />
            </div>
        </>
    )
}