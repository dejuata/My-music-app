import { useEffect, useRef, useState } from "react"
import { getTrackDetail } from "../api/requests/getTrackDetail";

export const useTrackDetail = ( trackId ) => {

    const [state, setState] = useState({
        data: {},
        loading: true
    })


    useEffect(() => {

        setState({ data: {}, loading: true });

        getTrackDetail(trackId)
            .then( tracks => {
                setState({
                    data: tracks,
                    loading: false
                })
            })
    }, [trackId])

    return state;
}