import React from "react";
import "./Rating.scss";
import {ReactComponent as StarFull} from "../../assets/images/alketa-full.svg";
import {ReactComponent as StarEmpty} from "../../assets/images/alketa-empty.svg";


const Rating = ({rating, onChange}) => {

    const stars = {
        FULL: <StarFull/>,
        EMPTY: <StarEmpty/>,
    }

    const count = [1, 2, 3, 4, 5];

    const handleClick = (rating) => {
        onChange(rating);
    }

    return (
        <div className="stars">
            {count.map(i => {
                return (
                    <div className="star"
                        onClick={() => handleClick(i)}>
                        {rating >= i ? stars.FULL : stars.EMPTY}
                    </div>
                )
            })}
        </div>
    )
}

export default Rating;