import React from 'react';

import './secondarybutton.css';

export const SecondaryButton = ({ url }) => {
    return (
        <div className='secondary-button'>
            <a  href={ url } target="_blank" rel="noopener noreferrer">
                Listen on Spotify
            </a>
        </div>
    )
}
