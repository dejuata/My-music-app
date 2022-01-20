import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFavorites } from '../../../actions/favorite';
import { getFavoritesTracks } from '../../../api/selectors/getFavoritesTracks'
import { TrackList } from '../../organisms/TrackList/TrackList';
import ReactLoading from "react-loading";

export const FavoritesPage = () => {

    const { token } = useSelector(state => state.auth);
    const { tracks } = useSelector(state => state.favorite);
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch();

    useEffect(() => {

        getFavoritesTracks(token)
            .then( data => {
                dispatch( setFavorites(data) );
                setLoading(false);
            })

    }, [token, dispatch])

    return (
        <>

            {

                loading
                ?
                    <div className='home__loading'>
                        <ReactLoading type={ 'bubbles' } color="#fff" />
                    </div>
                :
                    (
                        <>
                            <div className='home__container-title'>
                                <h2>Favorites</h2>
                                <hr />
                            </div>

                            <TrackList tracks={ tracks } showOnlyFavorite={ true }/>
                        </>
                    )

            }
        </>
    )
}
