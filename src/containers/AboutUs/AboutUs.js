import React from 'react';
import Header from "../../components/Header/Header";
import "./AboutUs.scss";

class AboutUs extends React.Component {
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
                <div className="aboutUs">
                    ABOUT US
                </div>
                {/*<Footer />*/}
            </div>
        );
    }

}

export default AboutUs;
