import React, {useEffect, useState} from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import './Home.sass';

function Home() {
    const [tidBit, setTidBit] = useState('');
    const [podcasts, setPodcasts] = useState(
        [
            {
                title: 'Podcast 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper posuere accumsan. Sed dui metus, cursus ac tristique sit amet, molestie at lacus. Etiam sit amet felis in diam dignissim mattis. Aenean in erat in nisi vestibulum auctor non ut urna. Nullam semper est vestibulum hendrerit congue. Fusce pellentesque, dolor convallis varius sollicitudin, magna ligula semper eros, tempus euismod purus neque ut erat. Sed aliquet consectetur lorem ut blandit.',
                thumbnail: 'https://rachelcorbett.com.au/wp-content/uploads/2018/07/Neon-podcast-logo.jpg'
            },
            {
                title: 'Podcast 2',
                description: 'Description 2',
                thumbnail: 'https://rachelcorbett.com.au/wp-content/uploads/2018/07/Neon-podcast-logo.jpg'
            },
            {
                title: 'Podcast 3',
                description: 'Description 3',
                thumbnail: 'https://rachelcorbett.com.au/wp-content/uploads/2018/07/Neon-podcast-logo.jpg'
            }
        ]
    );
    const renderedPodcastList = podcasts.map((podcast: any) => {
        return (
            <div key={uuid()} className={'podcast-container'}>
                <div className={'thumbnail'}>
                    <img width={'100%'} height={'100%'} alt={'thumbnail'} src={podcast.thumbnail}/>
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
    });

    useEffect(() => {
        axios.get('http://localhost:1337/home-page')
            .then((page: any) => {
               if (page.status === 200) {
                setTidBit(page.data.tidbit);
               }
            });
    }, []);

    return (
        <div id={'content'} className={'content'}>
            <div id={'landing-page-info'} className={'landing-page-info'}>{tidBit}</div>
            <div id={'podcasts'} className={'podcast-preview'}>
                <h2>Recent Podcasts</h2>
                {renderedPodcastList}
            </div>
        </div>
    );
}

export default Home;
