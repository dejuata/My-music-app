import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FavoriteButton } from '../../atoms/FavoriteButton/FavoriteButton';

export const TrackCard = ({ track, handleActive, handleDeactive }) => {

    return (

        <div className='m-card-track animate__animated animate__fadeIn '>

            <div className='m-card-track__body'>
                <Link to={`/track/${track.id}`} style={{ textDecoration: 'none' }}>
                    <figure className='m-card-track__body-image'>
                        <img src={ track.image } alt={ track.album }/>
                    </figure>
                    <div className='m-card-track__body-detail'>
                        <p>{ track.name_short }</p>
                        <p>{ track.artists }</p>
                    </div>
                </Link>
            </div>

            <div className='m-card-track__footer'>
                <span>{ track.duration }</span>
                <FavoriteButton
                    funcActive={ handleActive }
                    funcDeactive={ handleDeactive }
                    state={ track.favorite }
                />
            </div>

        </div>


    )
}

TrackCard.propTypes = {
    handleActive: PropTypes.func.isRequired,
    handleDeactive: PropTypes.func.isRequired,
    track: PropTypes.object.isRequired
}
