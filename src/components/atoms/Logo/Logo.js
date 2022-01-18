import React from 'react'


export const Logo = ({ showTitle = true }) => {

    const logoPath = `/assets/logo.svg`;

    return (
        <div className='a-logo-container'>
            <div className='a-logo-container__image'>
                <img src={logoPath} alt="logo" />
            </div>
            { showTitle && <p className='a-logo-container__title'>MY MUSIC APP</p>}

        </div>
    )
}
