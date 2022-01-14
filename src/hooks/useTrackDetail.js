import { useContext, useEffect, useState } from "react"
import { getTrackDetail } from "../api/selectors/getTrackDetail";
import { AuthContext } from "../auth/authContext";

export const useTrackDetail = ( trackId ) => {
    const { user } = useContext(AuthContext);
    const { token } = user;

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
    }, [])

    return state;
}