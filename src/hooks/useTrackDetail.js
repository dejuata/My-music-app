import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { getTrackDetail } from "../api/selectors/getTrackDetail";

export const useTrackDetail = ( trackId ) => {
    const { token } = useSelector(state => state.auth);

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getTrackDetail(trackId, token)
            .then( tracks => {
                setState({
                    data: tracks,
                    loading: false
                })
            })
    }, [token, trackId])

    return state;
}