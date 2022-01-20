import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Header = () => {

    const logoPath = `/assets/logo.svg`;
    const { name } = useSelector(state => state.auth)

    return (
        <header className='o-header'>
            <NavLink to="/">
                <div className='o-header__logo'>
                    <img src={logoPath} alt="logo"/>
                    MY MUSIC APP
                </div>
            </NavLink>

            <p>{ name }</p>
        </header>
    )
}
