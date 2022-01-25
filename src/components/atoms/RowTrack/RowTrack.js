import React from 'react';

export const RowTrack = ({
    id,
    index,
    name,
    duration
}) => {
    return (
        <div className="a-row-track">
                <div className="a-row-track__number">
                    { index }
                </div>

                <div className="a-row-track__title">
                    { name }
                </div>

                <div className="a-row-track__duration">
                    { duration }
                </div>
        </div>
    )
};
