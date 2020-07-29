import React from 'react';
import './Post.scss';
import FeatherIcon from 'feather-icons';


export default function Post({ id, title, description, handlePay }) {
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
            {handlePay && <button className="mx-auto mt-4"
                    onClick={handlePay}>
                Pay
            </button>}
        </div>
    )
}

