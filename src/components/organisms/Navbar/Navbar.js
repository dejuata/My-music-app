import React from 'react'
import { FaHeart, FaPowerOff } from 'react-icons/fa';


import { Logo } from '../../atoms/Logo/Logo'


import './navbar.css';

export const Navbar = () => {

    const logoPath = `/assets/logo.svg`;

    return (
        <nav className='o-navbar'>
            <div>
                <FaHeart className='o-navbar__icon'/>
            </div>
            <div>
                <img src={logoPath} alt="logo" className='o-navbar-logo'/>
            </div>
            <div>
                <FaPowerOff className='o-navbar__icon'/>
            </div>
        </nav>
    )
}
