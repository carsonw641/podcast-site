import React, { useEffect, useState } from 'react';
import Blog from '../types/blog';
import BlogReader from '../partials/BlogReader';
import { v4 as uuidv4 } from 'uuid';
import './BlogList.sass';

function BlogList(props: any) {

    const [displayBlogReader, setBlogReaderStatus] = useState<boolean>(false)

    const closeModal = () => {
        setBlogReaderStatus(false);
    };

    return (
        <div className={'blog-preview'}>
            <h2>{props.title}</h2>
            {
                props.blogs.map((blog: Blog) => {
                    console.log(blog.author.picture)
                    return (
                        <div key={uuidv4()} className={'blog-container'} onClick={ (e) => setBlogReaderStatus(true)}>
                            <div className={'thumbnail'}>
                                <img alt={'thumbnail'} src={`${process.env.REACT_APP_API_ENDPOINT}${blog.author.picture.url}`}/>
                            </div>
                            <div className={'details'}>
                                <h3>
                                    {blog.header}
                                </h3>
                                <span>
                                    {blog.author.name}
                                </span>
                                <span>
                                    {blog.publishDate}
                                </span>
                            </div>
                            { displayBlogReader &&
                                <BlogReader
                                    header={blog.header}
                                    author={blog.author.name}
                                    publishDate={blog.publishDate}
                                    body={blog.body}
                                    callback={closeModal}/>
                            }
                        </div>
                    );
                })
            }
            
        </div>
    );
}

export default BlogList;