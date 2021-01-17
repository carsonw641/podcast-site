import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Podcast from '../../types/podcast';
import PodcastList from '../../partials/PodcastList';
import './Podcasts.sass';

const QUERY_LIMIT = 10;

function Podcasts() {

    const [podcasts, setPodcasts] = useState<Podcast[]>([])
    const [pageIndex, setPageIndex] = useState<number>(0);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/podcastPreview?_start=${QUERY_LIMIT * pageIndex}&_limit=${QUERY_LIMIT}`)
        .then((response) => {
            if (response.status === 200) {
                setPodcasts(response.data ?? []);
            }
        });
    },[]);

    return (
        <div id={'podcasts'} className={'podcasts'}>
            <PodcastList title={'Podcasts'} podcasts={podcasts}/>
        </div>
    );
}

export default Podcasts;
