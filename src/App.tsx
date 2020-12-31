import React from 'react';
import {
    Switch,
    Route,
    useHistory
} from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './App.sass';
import { Home, About, Blogs, Podcasts } from './pages/index';

function App() {
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
        <>
            <div id={'navigation'} className={'navigation'}>
                <h3><span onClick={() => handleClick('/')}>Nasty Brutish & Short</span></h3>
                <div className={'page-links'}>{renderedNavigationList}</div>
            </div>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path='/podcasts'>
                    <Podcasts/>
                </Route>
                <Route exact path='/blogs'>
                    <Blogs/>
                </Route>
                <Route exact path='/about'>
                    <About/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
