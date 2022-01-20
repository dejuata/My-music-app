import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHeart, FaPowerOff, FaHome } from 'react-icons/fa';


import { useDispatch } from 'react-redux';
import { startLogout } from '../../../actions/auth';
import { finishLoading } from '../../../actions/ui';
import { logoutTrack } from '../../../actions/track';

export const Navbar = () => {

    const dispatch = useDispatch()
    // const { logged } = useSelector(state => state.token);

    const handleLogout = () => {
        // dispatch( removeToken() );
        // if (logged) {
        // }
        dispatch( startLogout() );
        dispatch( finishLoading() );
        dispatch( logoutTrack() )
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
