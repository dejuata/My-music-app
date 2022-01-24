import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../../../actions/favorite';
import { addTrackFavorite, removeTrackFavorite } from '../../../actions/track';
import { deleteFavoriteTrack } from '../../../api/requests/deleteFavoriteTrack';
import { putFavoriteTrack } from '../../../api/requests/putFavoriteTrack';
import { TrackCard } from '../../molecules/TrackCard/TrackCard'


export const TrackList = ({ tracks }) => {

    const dispatch = useDispatch();

    const handleActive = (id) => {
        putFavoriteTrack(id)
        dispatch( addTrackFavorite(id) );
    }

    const handleDeactive = (id) => {
        deleteFavoriteTrack(id)
        dispatch( removeFavorite(id) );
        dispatch( removeTrackFavorite(id) );
    }

    return (
        <div className='o-track-list-container'>
            {
                tracks.map( track => {
                    return <TrackCard
                                key={ track.id }
                                track={ track }
                                handleActive={ () => handleActive(track.id) }
                                handleDeactive={ () => handleDeactive(track.id) }
                            />
                })
            }
        </div>
    )
}
