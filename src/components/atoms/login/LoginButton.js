import React from 'react';
import PropTypes from 'prop-types';

export const LoginButton = ({ url }) => {

    return (
        <a href={url} >
            <div className='btn btn-secondary'>
                Log In with Spotify
            </div>
        </a>
    )
}

LoginButton.propTypes = {
    url: PropTypes.string.isRequired
}
