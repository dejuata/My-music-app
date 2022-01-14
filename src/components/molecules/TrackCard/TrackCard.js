import React from 'react'

import './trackcard.css';

export const TrackCard = ({
    name,
    name_short,
    album,
    artists,
    duration,
    image
}) => {


    return (

        <div className='card-track'>

            <div className='card-track__body'>
                <figure className='card-track__body-image'>
                    <img src={ image } alt={ album }/>
                </figure>
                <div className='card-track__body-detail'>
                    <p>{ name_short }</p>
                    <p>{ artists }</p>
                </div>
            </div>

            <div className='card-track__footer'>
                <span>{ duration}</span>
            </div>
        </div>


    )
}
