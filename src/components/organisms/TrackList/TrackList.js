import React from 'react'
import { TrackCard } from '../../molecules/TrackCard/TrackCard'


export const TrackList = ({ tracks, showOnlyFavorite = false}) => {
    console.log('TrackList', tracks)

    return (
        <div className='o-track-list-container'>
            {
                tracks.map( track => {
                    return <TrackCard  key={ track.id } { ...track }/>
                })
            }
        </div>
    )
}
