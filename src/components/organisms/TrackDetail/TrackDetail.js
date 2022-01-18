import React from 'react'
import { SpotifyButton } from '../../atoms/SpotifyButton/SpotifyButton';

export const TrackDetail = ({
    id,
    name,
    album_date,
    album,
    artists,
    duration,
    image,
    external_url
}) => {
    return (
        <div className='o-track-detail'>

            <figure className='o-track-detail__image'>
                <img src={ image } alt={ album }/>
            </figure>

            <div className='o-track-detail__body'>

                <div className='o-track-detail__body-title'>
                    <h2>{ name }</h2>
                    <p>{ artists }</p>
                </div>

                <div className='o-track-detail__body-info'>
                    <p>This song belongs to the Album <strong>{album}</strong> released on { album_date }.</p>
                    <p><strong>Duration: </strong>{ duration } min.</p>
                </div>

                <div className='o-track-detail__body-footer'>
                    <SpotifyButton url={ external_url }/>
                </div>
            </div>
        </div>
    )
}
