import React from 'react';
import "./Landingpage.scss";
import { Slide } from 'react-slideshow-image';
import Femijet from "../../assets/images/femijet.png"
import Gjyshja from "../../assets/images/gjyshja.png"
import Qeni from "../../assets/images/qeni.png"

const props = {
    duration: 3000,
    transitionDuration: 550,
    infinite: true,
    pauseOnHover: true,
}

const Slideshow = () => {
    return (
        <div  className="slide-container">
            <Slide {...props}>
                <div>
                    <img src={Femijet}   style={{height: "400px"}}/>
                </div>
                <div>
                    <img src={Gjyshja}   style={{height: "400px"}}/>
                </div>
                <div>
                    <img src={Qeni}   style={{height: "400px"}}/>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;