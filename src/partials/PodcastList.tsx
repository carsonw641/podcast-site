import React from 'react';
import { v4 as uuid } from 'uuid';
import Podcast from '../types/podcast';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './PodcastList.sass';

function PodcastList(props: any) {
    const dispatch = useDispatch();

    const loadAudio = async (podcastId: number, title: string, description: string = '') => {
        const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/getAudioFile?id=${podcastId}`);
        const url = result.data.url;

        dispatch({
            type: 'changeAudioFile',
            url,
            title,
            description
        });
    };

    

    return (
        <div className={'podcast-preview'}>
            <h2>{props.title}</h2>
            { 
                props.podcasts.map((podcast: Podcast) => {
                    return (
                        <div key={uuid()} className={'podcast-container'} onClick={ () => loadAudio(podcast.id, podcast.title, podcast.description)}>
                            <div className={'thumbnail'}>
                                <img width={'100%'} height={'100%'} alt={'thumbnail'} src={`${process.env.PUBLIC_URL}/podcast_logo.PNG`}/>
                            </div>
                            <div className={'details'}>
                                <h3>
                                    {podcast.title}
                                </h3>
                                <span>
                                    {podcast.description}
                                </span>
                            </div>
                        </div> 
                    );
                })
            } 
        </div>  
    );
}

export default PodcastList;