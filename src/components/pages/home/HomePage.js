import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTracks } from '../../../actions/track';
import { getRecommendedTracks } from '../../../api/selectors/getRecommendedTracks';
import { TrackList } from '../../organisms/TrackList/TrackList'

export const HomePage = () => {

    const loading = false;
    const { tracks } = useSelector(state => state.track);

    return (
        <>
            <div className='home__container-title'>
                <h2>Recommended</h2>
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
