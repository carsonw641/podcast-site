import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Podcast from '../../types/podcast';
import PodcastList from '../../partials/PodcastList';
import './Home.sass';

// Display only the most recent podcasts
const QUERY_LIMIT = 3;

function Home() {
    const [tidBit, setTidBit] = useState('');
    const [podcasts, setPodcasts] = useState<Podcast[]>([]);

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/podcastPreview?_limit=${QUERY_LIMIT}`)
            .then((response) => {
                if (response.status === 200) {
                    setPodcasts(response.data ?? []);
                }
            });
    },[]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/home-page`)
            .then((response: any) => {
               if (response.status === 200) {
                setTidBit(response.data.tidbit);
               }
            })
            .catch((err: any) => {
            });
        
    }, []);

    return (
        <div id={'home'} className={'home'}>
            {!!tidBit &&
                <div id={'landing-page-info'} className={'landing-page-info'}>
                    <h3>Message Board</h3>
                    <p>{tidBit}</p>
                </div>
            }    
            <PodcastList title={'Recent Podcasts'} podcasts={podcasts}/>
        </div>
    );
}

export default Home;
