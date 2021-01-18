import React, { useEffect, useState } from 'react';
import Blog from '../types/blog';
import BlogReader from '../partials/BlogReader';
import { v4 as uuidv4 } from 'uuid';
import './BlogList.sass';

const PAGE_LIMIT = 5;

function BlogList(props: any) {
    const [page, setPage] = useState<number>(0);
    const [displayBlogReader, setBlogReaderStatus] = useState<boolean>(false)

    const closeModal = () => {
        setBlogReaderStatus(false);
    };

    const firstIndex = page * PAGE_LIMIT;
    const lastIndex = firstIndex + PAGE_LIMIT <= props.blogs.length ? firstIndex + PAGE_LIMIT : props.blogs.length;
    const blogs: Blog[] = props.blogs.slice(firstIndex, lastIndex);

    return (
        <div className={'blog-preview'}>
            <h2>{props.title}</h2>
            {
                blogs.map((blog: Blog) => {
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
            {props.pagination && <div className={'pagination-container'}>
                {firstIndex !== 0 && <div className={'pagination backward'} onClick={ () => setPage(page - 1)}>{'<'}</div>}
                <div className={'page-number'}>{page + 1}</div>
                {lastIndex !== props.blogs.length && <div className={'pagination forward'} onClick={ () => setPage(page + 1)}>{'>'}</div>}
            </div>}
        </div>
    );
}

export default BlogList;