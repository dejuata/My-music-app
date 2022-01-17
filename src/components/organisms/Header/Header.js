import React from 'react'

import './header.css';

export const Header = () => {

    const logoPath = `/assets/logo.svg`;

    return (
        <header className='header'>
            <div className='header__logo'>
                <img src={logoPath} alt="logo"/>
                MY MUSIC APP
            </div>
            <p>Juan David Pino</p>
        </header>
    )
}
