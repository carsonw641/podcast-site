import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Author from '../../types/author'


function About() {
    const [authors, setAuthors] = useState<Author[]>([]);
    useEffect(() => {
        axios.get(`http://localhost:1337/authors`)
        .then(response => {
            if (response.status === 200) {
                setAuthors(response.data.authors ?? []);
            }
        });    
    }, []);

    const authorList = authors.map((author: Author) => {
        return (
            <>
                <ul>
                    <li>{author.name}</li>
                    <li>{author.description}</li>
                </ul>
            </>
        );
    });

    return (
        <>
            <h1>About</h1>
            {authorList}
        </>
    );
}

export default About;
