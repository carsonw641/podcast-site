import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from '../../types/blog';
import BlogList from '../../partials/BlogList';
import './Blogs.sass';

const QUERY_LIMIT = 10;

function Blogs() {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/blogs`)
        .then(response => {
            if (response.status === 200) {
                setBlogs(response.data ?? []);
            }
        });    
    }, []);

    

    return (
        <div id={'blogs'} className={'blogs'}>
            <BlogList title={'Blogs'} blogs={blogs} pagination={true}/>
        </div>
    );
}

export default Blogs;
