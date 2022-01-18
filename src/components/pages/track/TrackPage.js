import React from 'react'
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
                    <p>Loading</p>
                :
                    <TrackDetail {...track}/>

            }
        </>
    )
}
