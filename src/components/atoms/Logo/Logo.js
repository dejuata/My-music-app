import React from 'react'


export const Logo = () => {

    const logoPath = `./assets/logo.svg`;

    return (
        <div className='a-logo-container'>
            <div className='a-logo-container__image'>
                <img src={logoPath} alt="logo" />
            </div>
            <p className='a-logo-container__title'>MY MUSIC APP</p>
        </div>
    )
}
