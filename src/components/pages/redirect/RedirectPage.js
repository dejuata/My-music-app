import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { login, setToken } from '../../../actions/auth';

import { getTokenFromUrl } from '../../../api/requests/getTokenFromUrl';
import { getUserInfo } from '../../../api/requests/getUserInfo';

export const RedirectPage = () => {

    const { hash } = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        const _token = getTokenFromUrl(hash);

        dispatch( setToken(_token) );

        getUserInfo()
            .then( ( {id, displayName} ) => {
                dispatch( login(id, displayName, 'spotify', _token) );
            })

    }, [dispatch, hash])

    return (
        <>
        </>
    )
}
