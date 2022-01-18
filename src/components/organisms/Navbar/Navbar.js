import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaHeart, FaPowerOff, FaHome } from 'react-icons/fa';


import './navbar.css';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../../actions/auth';
import { finishLoading } from '../../../actions/ui';

export const Navbar = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch( startLogout() )
        dispatch( finishLoading() )
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
                    <FaHome className='o-navbar__icon'/>
                </div>
            </NavLink>

            <div
                onClick={ handleLogout }
            >
                <FaPowerOff className='o-navbar__icon'/>
            </div>
        </nav>
    )
}
