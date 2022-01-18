import React, { useEffect, useState } from 'react'
import { useRecommendedTracks } from '../../../hooks/useRecommendedTracks';
import { TrackList } from '../../organisms/TrackList/TrackList'

// import './homepage.css';

// const category = 'latin';

export const HomePage = () => {
    console.log('HomePage')
    const { data:tracks, loading } = useRecommendedTracks('latin');

    return (
        <>
            <div className='home__container-title'>
                <h2>Recommended</h2>
                <hr />
            </div>
            {

                loading
                ?
                    <p>Loading</p>
                :
                    <TrackList tracks={ tracks } />

            }
        </>
    )
}
