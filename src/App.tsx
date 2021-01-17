import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import './App.sass';
import {
    Home,
    About,
    Blogs,
    Podcasts
} from './pages/index';
import Header from './partials/Header';
import AudioPlayer from './partials/AudioPlayer';

function App() {
    return (
        <>
            <Header/>
            <div className={'pages'}>
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
            </div>
            <AudioPlayer/>
        </>
    );
}

export default App;
