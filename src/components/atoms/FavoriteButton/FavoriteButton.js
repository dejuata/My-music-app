import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa';

export const FavoriteButton = ({ funcActive, funcDeactive, state }) => {

    const [active, setActive] = useState(state)

    const handleOnClick = () => {
        if (!active) {
            console.log('active')
            funcActive();
        } else {
            console.log('deactive')
            funcDeactive();
        }
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
