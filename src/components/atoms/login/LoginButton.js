import React from 'react'



import './loginButton.css';

export const LoginButton = ({ url }) => {

    return (
            <div className='a-login-button'>
                <a href={url} >
                    Log In with Spotify
                </a>
            </div>
    )
}
