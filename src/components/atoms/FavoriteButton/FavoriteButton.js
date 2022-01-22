import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';

export const FavoriteButton = ({ funcActive, funcDeactive, state = false}) => {

    const [active, setActive] = useState(state)

    const handleOnClick = () => {
        !active ? funcActive() : funcDeactive()
        setActive(!active)
    }

    return (
        <button
            className='a-favorite-button'
            onClick={ handleOnClick }
        >
            <FaHeart
                className={` a-favorite__icon ${ active && 'a-favorite__icon--active'}`}
            />
        </button>
    )
}

FavoriteButton.propTypes = {
    funcActive: PropTypes.func.isRequired,
    funcDeactive: PropTypes.func.isRequired,
    state: PropTypes.bool
}