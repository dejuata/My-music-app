import React from 'react';
import PropTypes from 'prop-types';

export const SpotifyButton = ({ url }) => {
    return (
        <a
            href={ url }
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className='btn btn-secondary'>
                Listen on Spotify
            </div>
        </a>
    )
}

SpotifyButton.propTypes = {
    url: PropTypes.string.isRequired
}
