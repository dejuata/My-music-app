import React from 'react';
import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({
    isAuthenticated,
    children: Component,
}) => {

    return ( isAuthenticated )
        ? ( Component )
        : ( <Navigate to="/auth/login" /> )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    children: PropTypes.object.isRequired
}
