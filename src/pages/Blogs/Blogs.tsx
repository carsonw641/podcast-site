import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from '../../types/blog'

const QUERY_LIMIT = 10;

function Blogs() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:1337/blogs?_start=${QUERY_LIMIT * page}&_limit=${QUERY_LIMIT}`)
        .then(response => {
            if (response.status === 200) {
                setBlogs(response.data.blogs ?? []);
            }
        });    
    }, []);

    console.log(blogs);
    const blogList = blogs.map((blog: Blog) => {
        return (
            <ul>
                <li>{blog.header}</li>
                <li>{blog.author}</li>
                <li>{blog.publishDate}</li>
            </ul>
        )
    });

    return (
        <>
            <h1>Blogs</h1>
            {blogList}
        </>
    );
}

export default Blogs;
