import React from 'react'
import { TrackCard } from '../../molecules/TrackCard/TrackCard'
import { Link } from 'react-router-dom';

import './tracklist.css';

export const TrackList = ({ tracks }) => {


    return (
        <div className='card-container'>
            {
                tracks.map( (track, index) => {
                    track.index = index;
                    return <TrackCard  key={ track.id } { ...track }/>
                })
            }
        </div>
    )
}
