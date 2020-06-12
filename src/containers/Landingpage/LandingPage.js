import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Styles.scss";
import Checked  from "../../assets/images/checked.png";
import Lock  from "../../assets/images/lock.png";
import Clock  from "../../assets/images/clock.png";
import Baby  from "../../assets/images/baby.png";
import Elder  from "../../assets/images/elder.png";
import Pet from "../../assets/images/pet.png";
import House  from "../../assets/images/house.png";

class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //
        }
    }

    render() {
        return (
            <div>
                <Header />

                 <div className="slideshow"></div>
                <div className="services">
                    <h1>Shërbimet tona</h1>
                    <img src={Baby}/>
                    <img src={Elder}/>
                    <img src={Pet}/>
                    <img src={House}/>
                </div>
                <div className="ourValues">
                    <h1>Çfarë thonë miqt dhe partnerët për ne</h1>
                {/*    <div>*/}
                {/*        <img src={Checked}/>*/}
                {/*        <img src={Clock}/>*/}
                {/*        <img src={Lock}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="friends">
                    <div className={"post-image"} />
                    <div className={"partner"}>
                        UNICEF
                    </div>
                    <div className={"post-description"}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className="friends">
                    <div className={"post-image"} />
                    <div className={"partner"}>
                        ICK
                    </div>
                    <div className={"post-description"}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className="friends">
                    <div className={"post-image"} />
                    <div className={"partner"}>
                        UBT
                    </div>
                    <div className={"post-description"}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                </div>
             <Footer />
            </div>

        );
    }

}

export default LandingPage;
