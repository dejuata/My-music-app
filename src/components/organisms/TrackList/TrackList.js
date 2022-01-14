import React from 'react'
import { TrackCard } from '../../molecules/TrackCard/TrackCard'
import { Link } from 'react-router-dom';

import './tracklist.css';

export const TrackList = ({ tracks }) => {


    return (
        <>
            {
                tracks.map( track => {
                    return (
                        <div className='card-continar'>
                            <Link to={`/track/${track.id}`} style={{ textDecoration: 'none' }}>
                                <TrackCard  key={ track.id } { ...track }/>
                            </Link>
                        </div>)
                })
            }
        </>
    )
}
