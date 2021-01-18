import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Podcast from '../../types/podcast';
import PodcastList from '../../partials/PodcastList';
import './Podcasts.sass';

function Podcasts() {
    const [podcasts, setPodcasts] = useState<Podcast[]>([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/podcastPreview`)
        .then((response) => {
            if (response.status === 200) {
                setPodcasts(response.data ?? []);
            }
        });
    },[]);

    return (
        <div id={'podcasts'} className={'podcasts'}>
            <PodcastList title={'Podcasts'} podcasts={podcasts} pagination={true}/>
        </div>
    );
}

export default Podcasts;
