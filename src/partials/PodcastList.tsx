import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Podcast from '../types/podcast';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './PodcastList.sass';

const PAGE_LIMIT = 5;

function PodcastList(props: any) {
    const [page, setPage] = useState<number>(0);
    const dispatch = useDispatch();

    const firstIndex = page * PAGE_LIMIT;
    const lastIndex = firstIndex + PAGE_LIMIT <= props.podcasts.length ? firstIndex + PAGE_LIMIT : props.podcasts.length;
    const podcasts: Podcast[] = props.podcasts.slice(firstIndex, lastIndex);

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
                podcasts.map((podcast: Podcast) => {
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
            {props.pagination && <div className={'pagination-container'}>
                {firstIndex !== 0 && <div className={'pagination backward'} onClick={ () => setPage(page - 1)}>{'<'}</div>}
                <div className={'page-number'}>{page + 1}</div>
                {lastIndex !== props.podcasts.length && <div className={'pagination forward'} onClick={ () => setPage(page + 1)}>{'>'}</div>}
            </div>}
        </div>  
    );
}

export default PodcastList;