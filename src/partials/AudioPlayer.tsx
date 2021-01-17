import React from 'react';
import { useSelector } from 'react-redux';
import './AudioPlayer.sass'

function AudioPlayer() {
    const podcast = useSelector((state: any) => state.AudioPlayerFile);

    return (
        <>
            { podcast.file &&
                <div className={'container'}>
                    <p>
                        <small>{podcast.title}</small>
                    </p>
                    <audio autoPlay controls src={`${process.env.REACT_APP_API_ENDPOINT}${podcast.file}`}></audio>
                </div>
            }
        </>
    );
}

export default AudioPlayer;