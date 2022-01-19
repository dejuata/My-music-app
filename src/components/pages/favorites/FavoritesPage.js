import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFavorites } from '../../../actions/favorite';
import { getFavoritesTracks } from '../../../api/selectors/getFavoritesTracks'
import { TrackList } from '../../organisms/TrackList/TrackList';

export const FavoritesPage = () => {

    const loading = false;
    const { token, logged } = useSelector(state => state.auth);
    const { tracks } = useSelector(state => state.favorite);
    const dispatch = useDispatch();

    useEffect(() => {
        getFavoritesTracks(token)
            .then( data => {
                console.log(data)
                dispatch( setFavorites(data) );
            })
    }, [token, dispatch])

    return (
        <>
            <div className='home__container-title'>
                <h2>Favorites</h2>
                <hr />
            </div>
            {

                loading
                ?
                    <p>Loading</p>
                :
                    <TrackList tracks={ tracks } />

            }
        </>
    )
}
