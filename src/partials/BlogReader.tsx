import React from 'react';
import './BlogReader.sass';

function BlogReader(props: any) {
    const closeModal = (e: any) => {
        e.stopPropagation();
        if (e.target.className.includes('modal-container')){
            props.callback();
        }
    }

    return (
        <div className={'modal-container'} onClick={(e) => closeModal(e)}>
            <div className={'content'}>
                <div className={'inner-content'}>
                    <h1>{props.header}</h1>
                    <h3>{props.author}</h3>
                    <h5>{props.publishDate}</h5>
                    <p>{props.body}</p>
                </div>
            </div>
        </div>
    );
}

export default BlogReader;