import React from 'react';
import './Header.sass';
import {
    useHistory
} from 'react-router-dom';
import { v4 as uuid } from 'uuid';

function Header() {

    const history = useHistory();
    const handleClick = (route: string) => {
        history.push(route);
    };

    const navigationLinks = [
        {
            link: '/podcasts',
            name: 'Podcasts'
        },
        {
            link: '/blogs',
            name: 'Blog Posts'
        },
        {
            link: 'about',
            name: 'About Us'
        }
    ];

    const renderedNavigationList = navigationLinks.map((navigation: any) => {
        return (
            <span key={uuid()} onClick={() => handleClick(navigation.link)}>{navigation.name}</span>
        );
    });

    return (
        <div id={'header'} className={'header'}>
            <h3><span onClick={() => handleClick('/')}>Nasty Brutish & Short</span></h3>
            <div className={'page-links'}>{renderedNavigationList}</div>
        </div>
    );
}

export default Header;