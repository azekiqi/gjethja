import React from 'react';
import './Post.scss';

export default function Post({id, title, description}) {
    return(
        <div className="post">
            <div className={"post-image"} />
            <div className={"post-name"}>
                { title }
            </div>
            <div className={"post-title"}>
                { title }
            </div>
            <div className={"post-description"}>
                { description }
            </div>
            <div className={"post-favorite"}>
                icon
            </div>
        </div>
    )
}
