import React from 'react';
import './styles.scss';

export default function Post({id, title, description}) {
    return(
        <div className="post">
            <div className={"post_image"} />
            <div className={"post_title"}>
                { title }
            </div>
            <div className={"post_description"}>
                { description }
            </div>
        </div>
    )
}
