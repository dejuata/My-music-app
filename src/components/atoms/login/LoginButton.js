import React from 'react'

export const LoginButton = ({ url }) => {

    return (
        <div className='btn btn-secondary'>
            <a href={url} >
                Log In with Spotify
            </a>
        </div>
    )
}
