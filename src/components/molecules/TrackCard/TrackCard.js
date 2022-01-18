import React from 'react'
import { Link } from 'react-router-dom';

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

        <div className='m-card-track'>

            <div className='m-card-track__body'>
                <Link to={`/track/${id}`} style={{ textDecoration: 'none' }}>
                    <figure className='m-card-track__body-image'>
                        <img src={ image } alt={ album }/>
                    </figure>
                    <div className='m-card-track__body-detail'>
                        <p>{ name_short }</p>
                        <p>{ artists }</p>
                    </div>
                </Link>
            </div>

            <div className='m-card-track__footer'>
                <span>{ duration}</span>
            </div>
        </div>


    )
}
