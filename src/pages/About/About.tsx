import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Author from '../../types/author';
import { v4 as uuidv4 } from 'uuid';
import './About.sass';


function About() {
    const [authors, setAuthors] = useState<Author[]>([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/authors`)
        .then(response => {
            if (response.status === 200) {
                setAuthors(response.data ?? []);
            }
        });    
    }, []);

    const authorList = authors.map((author: Author) => {
        return (
            <div key={uuidv4()} className={'author-container'}>
                <img alt="" src={`${process.env.REACT_APP_API_ENDPOINT}${author.picture.url}`}/>
                <div className={"author-info"}>
                    <h3>{author.name}</h3>
                    <p>{author.description}</p>
                </div>
            </div>
        );
    });

    return (
        <div id={'about'} className={'about'}>
            {authorList}
        </div>
    );
}

export default About;
