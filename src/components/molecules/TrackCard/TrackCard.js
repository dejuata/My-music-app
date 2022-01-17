import React from 'react'
import { Link } from 'react-router-dom';

import './trackcard.css';

export const TrackCard = ({
    id,
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
                <Link to={`track/${id}`} style={{ textDecoration: 'none' }}>
                    <figure className='card-track__body-image'>
                        <img src={ image } alt={ album }/>
                    </figure>
                    <div className='card-track__body-detail'>
                        <p>{ name_short }</p>
                        <p>{ artists }</p>
                    </div>
                </Link>
            </div>

            <div className='card-track__footer'>
                <span>{ duration}</span>
            </div>
        </div>


    )
}
