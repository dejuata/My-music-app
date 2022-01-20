import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { login } from '../../../actions/auth';

import { getTokenFromUrl } from '../../../api/selectors/getTokenFromUrl';
import { getUserInfo } from '../../../api/selectors/getUserInfo';

export const RedirectPage = () => {

    const { hash } = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        const _token = getTokenFromUrl(hash);
        getUserInfo(_token)
        .then( ( {id, displayName} ) => {
            dispatch( login(id, displayName, 'spotify', _token) );
            })
    }, [dispatch, hash])

    return (
        <>
        </>
    )
}
