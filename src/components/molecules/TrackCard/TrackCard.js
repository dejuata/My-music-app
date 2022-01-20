import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { putFavoriteTrack } from '../../../api/selectors/putFavoriteTrack';
import { useDispatch, useSelector } from 'react-redux';
import { FavoriteButton } from '../../atoms/FavoriteButton/FavoriteButton';
import { deleteFavoriteTrack } from '../../../api/selectors/deleteFavoriteTrack';
import { removeFavorite } from '../../../actions/favorite';
import { addTrackFavorite, removeTrackFavorite } from '../../../actions/track';

export const TrackCard = ({
    id,
    name,
    name_short,
    album,
    artists,
    duration,
    image,
    favorite
}) => {

    const { token, logged } = useSelector(state => state.auth);
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    const handleActive = () => {
        putFavoriteTrack(token, id)

        if (pathname === '/') {
            dispatch( addTrackFavorite(id) );
        }

    }

    const handleDeactive = () => {
        deleteFavoriteTrack(token, id)

        if (pathname === '/favorites') {
            dispatch( removeFavorite(id) );
            dispatch( removeTrackFavorite(id) );
        }

        if (pathname === '/') {
            dispatch( removeTrackFavorite(id) );
        }
    }

    return (

        <div className='m-card-track animate__animated animate__fadeIn '>

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
                <span>{ duration }</span>
                <FavoriteButton
                    funcActive={ handleActive }
                    funcDeactive={ handleDeactive }
                    state={ favorite }
                />
            </div>

        </div>


    )
}
