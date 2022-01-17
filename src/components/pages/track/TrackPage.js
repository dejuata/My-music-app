import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useTrackDetail } from '../../../hooks/useTrackDetail';
import { TrackDetail } from '../../organisms/TrackDetail/TrackDetail';

import './trackpage.css';

export const TrackPage = () => {
    console.log('TrackPage')

    const { trackId } = useParams();
    const navigate = useNavigate();

    const { data:track, loading } = useTrackDetail(trackId);


    return (
        <div>
            <TrackDetail {...track}/>
        </div>
    )
}
