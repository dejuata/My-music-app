import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useTrackDetail } from '../../../hooks/useTrackDetail';

import './trackpage.css';

export const TrackPage = () => {
    console.log('TrackPage')

    const { trackId } = useParams();
    const navigate = useNavigate();

    const { data:track, loading } = useTrackDetail(trackId);


    return (
        <div>
            <div className='track-detail'>
                <figure className='track-detail__image'>
                    <img src={ track.image } alt={ track.album }/>
                </figure>
                <div className='track-detail__info'>
                    <h2>{ track.name }</h2>
                    <p>{ track.artists }</p>
                    <p>This song belongs to the Album <strong>{track.album}</strong> released on {track.album_date}.</p>
                    <p><strong>Duration: </strong>{ track.duration } min.</p>
                    <a className='secondary-button' href={ track.external_url } target="_blank" rel="noopener noreferrer">
                        Listen on Spotify
                    </a>
                </div>
            </div>
        </div>
    )
}
