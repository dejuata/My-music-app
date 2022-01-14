import React, { useContext, useEffect, useMemo, useState } from 'react'
import { getRecommendedTracks } from '../../../api/selectors/getRecommendedTracks';
import { AuthContext } from '../../../auth/authContext';
import { useRecommendedTracks } from '../../../hooks/useRecommendedTracks';
import { TrackList } from '../../organisms/TrackList/TrackList'

import './homepage.css';

export const HomePage = () => {
    console.log('HomePage')

    const { data:tracks, loading } = useRecommendedTracks('latin');

    console.log('Hometracks', tracks, loading)


    return (
        <>
            <div className='container-title'>
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
