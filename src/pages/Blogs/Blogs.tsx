import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from '../../types/blog';
import BlogList from '../../partials/BlogList';
import './Blogs.sass';

const QUERY_LIMIT = 10;

function Blogs() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/blogs?_start=${QUERY_LIMIT * page}&_limit=${QUERY_LIMIT}`)
        .then(response => {
            if (response.status === 200) {
                setBlogs(response.data ?? []);
            }
        });    
    }, []);

    

    return (
        <div id={'blogs'} className={'blogs'}>
            <BlogList title={'Blogs'} blogs={blogs}/>
        </div>
    );
}

export default Blogs;
