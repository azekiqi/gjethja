import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Styles.scss";
import Sidebar from "../../components/Sidebar/Sidebar";

class Landingpage extends React.Component {
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

                 <div className="slideshow">
                    SLIDESHOW
                 </div>
                <div className="services">
                    SERVICES
                </div>
                <div className="ourValues">
                    Our Values
                </div>
             <Footer />
            </div>

        );
    }

}

export default Landingpage;
