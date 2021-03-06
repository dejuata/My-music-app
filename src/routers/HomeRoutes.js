import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { setTracks } from '../actions/track'
import { getRecommendedTracks } from '../api/requests/getRecommendedTracks'
import { Header } from '../components/organisms/Header/Header'
import { Navbar } from '../components/organisms/Navbar/Navbar'
import { FavoritesPage } from '../components/pages/favorites/FavoritesPage'
import { HomePage } from '../components/pages/home/HomePage'
import { TrackPage } from '../components/pages/track/TrackPage'
import ReactLoading from "react-loading";

export const HomeRoutes = ( { load = true } ) => {

    const [loading, setLoading] = useState(load)
    const dispatch = useDispatch();

    const loadData = async () => {
        const tracks = await getRecommendedTracks('latin')
        dispatch( setTracks(tracks) );
        setLoading(false);
    }

    useEffect(() => {
        loadData();
    }, [ ])

    return (
        <>
            <Header />
            <div className='home__container'>
            {

                loading
                ?
                    <div className='home__loading a'>
                        <ReactLoading type={ 'bubbles' } color="#fff" />
                    </div>
                :
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="favorites" element={<FavoritesPage />} />
                        <Route path="track/:trackId" element={<TrackPage />} />
                    </Routes>

            }
            </div>

            <div className='home__navbar'>
                <Navbar />
            </div>
        </>
    )
}