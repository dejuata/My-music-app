import React from 'react'
import { SecondaryButton } from '../../atoms/SecondaryButton/SecondaryButton';

import './trackdetail.css';

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
        <div className='track-detail'>

            <figure className='track-detail__image'>
                <img src={ image } alt={ album }/>
            </figure>

            <div className='track-detail__body'>

                <div className='track-detail__body-title'>
                    <h2>{ name }</h2>
                    <p>{ artists }</p>
                </div>

                <div className='track-detail__body-info'>
                    <p>This song belongs to the Album <strong>{album}</strong> released on { album_date }.</p>
                    <p><strong>Duration: </strong>{ duration } min.</p>
                </div>

                <div className='track-detail__body-footer'>
                    <SecondaryButton url={ external_url }/>
                </div>
            </div>
        </div>
    )
}
