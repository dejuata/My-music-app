import React, { useEffect, useState } from 'react'
import { getRecommendedTracks } from '../../../api/selectors/getRecommendedTracks';
import { TrackCard } from '../../molecules/TrackCard/TrackCard'

import './tracklist.css';

export const TrackList = ({ tracks }) => {


    return (
        <>
            {
                tracks.map( track => {
                    return (
                        <div className='card-continar'>
                            <TrackCard  key={ track.id } { ...track }/>
                        </div>)
                })
            }
        </>
    )
}
