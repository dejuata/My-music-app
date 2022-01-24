import React from 'react'
import ReactLoading from "react-loading";
import { useParams } from 'react-router-dom';
import { useTrackDetail } from '../../../hooks/useTrackDetail';
import { TrackDetail } from '../../organisms/TrackDetail/TrackDetail';


export const TrackPage = () => {

    const { trackId } = useParams();

    const { data:track, loading } = useTrackDetail(trackId);


    return (
        <>
            {

                loading
                ?
                    <div className='home__loading'>
                        <ReactLoading type={ 'bubbles' } color="#fff" />
                    </div>
                :
                    <TrackDetail {...track}/>

            }
        </>
    )
}
