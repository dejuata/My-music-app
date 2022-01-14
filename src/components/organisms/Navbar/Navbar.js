import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaHeart, FaPowerOff } from 'react-icons/fa';


import './navbar.css';
import { AuthContext } from '../../../auth/authContext';
import { authType } from '../../../types/authType';

export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const logoPath = `/assets/logo.svg`;

    const handleLogout = () => {
        const action = {
            type: authType.logout
        }

        dispatch(action);

        navigate('/auth', {
            replace: true
        })
    }

    return (
        <nav className='o-navbar'>
            <NavLink to="/favorites">
                <div>
                    <FaHeart className='o-navbar__icon'/>
                </div>
            </NavLink>

            <NavLink to="/">
                <div>
                    <img src={logoPath} alt="logo" className='o-navbar-logo'/>
                </div>
            </NavLink>

            <div onClick={ handleLogout }>
                <FaPowerOff className='o-navbar__icon'/>
            </div>
        </nav>
    )
}
