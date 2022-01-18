import React, { useEffect, useState } from "react"
import { getRecommendedTracks } from "../api/selectors/getRecommendedTracks";
import { useSelector } from 'react-redux';

export const useRecommendedTracks = ( category ) => {

    const { token } = useSelector(state => state.auth);

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getRecommendedTracks(category, token)
            .then( tracks => {
                setState({
                    data: tracks,
                    loading: false
                })
            })
    }, [category, token])

    return state;
}