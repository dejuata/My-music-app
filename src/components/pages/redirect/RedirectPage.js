import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { login, runLogoutTimer, setToken } from '../../../actions/auth';

import { getTokenFromUrl } from '../../../api/requests/getTokenFromUrl';
import { getUserInfo } from '../../../api/requests/getUserInfo';

export const RedirectPage = () => {

    const { hash } = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        const { access_token, expires_in } = getTokenFromUrl(hash);

        dispatch( setToken({ access_token, expires_in }) );

        getUserInfo()
            .then( ( {id, displayName} ) => {
                dispatch( login(id, displayName, 'spotify', access_token, expires_in) );
                runLogoutTimer(dispatch, expires_in * 1000);
            })

    }, [dispatch, hash])

    return (
        <>
        </>
    )
}
