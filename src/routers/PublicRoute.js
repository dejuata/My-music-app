import React from 'react';
import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';


export const PublicRoute = ({
    isAuthenticated,
    children: Component,
}) => {

    return ( isAuthenticated )
        ? ( <Navigate to="/" /> )
        : ( Component )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    children: PropTypes.object.isRequired
}
