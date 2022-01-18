import React from 'react';
import { useSelector } from 'react-redux';

export const Header = () => {

    const logoPath = `/assets/logo.svg`;
    const { name } = useSelector(state => state.auth)

    return (
        <header className='header'>
            <div className='header__logo'>
                <img src={logoPath} alt="logo"/>
                MY MUSIC APP
            </div>
            <p>{ name }</p>
        </header>
    )
}
