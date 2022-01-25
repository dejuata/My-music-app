import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import { RowTrack } from '../../atoms/RowTrack/RowTrack';

export const AlbumTracks = ({ tracks }) => {

    const track = {
        index: 1,
        name: 'Intro',
        duration: '1:11'
    }

    return(
        <div className='m-album-tracks'>

            <div className='m-album-tracks__heading'>
                <div className='m-album-tracks__heading__number'>
                    #
                </div>

                <div className='m-album-tracks__heading__title'>
                    Song
                </div>
                <div className='m-album-tracks__heading__duration'>
                    <FaRegClock />
                </div>
            </div>

            {
                tracks.map( (track, index) => {
                    track.index = index + 1
                    return <RowTrack key={ track.id } { ...track }/>
                })
            }


        </div>
    )

};
