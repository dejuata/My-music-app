import { useEffect, useRef, useState } from "react"
import { getTrackDetail } from "../api/requests/getTrackDetail";

export const useTrackDetail = ( trackId ) => {

    const isMounted = useRef(true);

    const [state, setState] = useState({
        data: {},
        loading: true
    })

    useEffect( () => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({ data: {}, loading: true });

        getTrackDetail(trackId)
            .then( tracks => {
                if ( isMounted.current ) {
                    setState({
                        data: tracks,
                        loading: false
                    })
                }
            })
    }, [trackId])

    return state;
}