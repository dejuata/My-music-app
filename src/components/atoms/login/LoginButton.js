import React from 'react'

export const LoginButton = ({ url }) => {

    return (
        <a href={url} >
            <div className='btn btn-secondary'>
                Log In with Spotify
            </div>
        </a>
    )
}
