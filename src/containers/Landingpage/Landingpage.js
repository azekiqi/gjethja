import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Landingpage.scss";
import Baby  from "../../assets/images/baby.png";
import Elder  from "../../assets/images/elder.png";
import Pet from "../../assets/images/pet.png";
import House  from "../../assets/images/house.png";
import Slideshow from "./Slideshow";
import Modal from "react-modal";
import {getFeedback, saveFeedback} from "../../actions/user";
import { connect } from "react-redux";
import ReactPlayer from "react-player";

class Landingpage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            modalId: null,
            feedbackText: "",
            feedback: []
        }
    }

    componentDidMount() {
        this.props.getFeedback().then(res => {
            this.setState({ feedback: res.data });
        })
    }

    closeModal = () => {
        this.setState({ isModalOpen: false });
    }

    openModal = (id) => {
        this.setState({ isModalOpen: true });
    }

    handleSubmit = () => {
        this.props.saveFeedback(this.state.feedbackText).then(re => {
            this.props.getFeedback().then(res => {
                this.setState({ feedback: res.data, isModalOpen: false });
            })

        })
    }

    render() {
        const { isModalOpen } = this.state;
        return (
            <div>
                <Header />
                 <div className="slideshow">
                     <Slideshow />
                 </div>
                <div className="services">
                    <div className="services-title">Shërbimet të cilat ofrohen</div>
                    <div className="services-cards">
                     <div className="services-card">
                         <div className="services-card-img">
                             <img src={Baby}/>
                         </div>
                         <div className="service-card-text">
                             Kujdes për fëmijë
                         </div>
                     </div>
                     <div className="services-card">
                         <div className="services-card-img">
                             <img src={Elder}/>
                         </div>
                         <div className="service-card-text">
                             Kujdes për të moshuar
                         </div>
                     </div>
                     <div className="services-card">
                         <div className="services-card-img">
                             <img src={Pet}/>
                         </div>
                         <div className="service-card-text">
                             Kujdes për kafshët
                         </div>
                     </div>
                     <div className="services-card">
                         <div className="services-card-img">
                             <img src={House}/>
                         </div>
                        <div className="service-card-text">
                            Kujdes shtëpiak
                        </div>
                     </div>
                    </div>
                </div>


                <div className="ourvalues">
                    <div className="content">
                        <div className="video-col">
                            <ReactPlayer url='https://youtu.be/4nfbjaM_4o8' />
                        </div>
                        <p className="about-text">
                            <br/><br/> Përdorimi i këtij website do të mundësoj gjetjen e shërbimeve të ndryshme siç janë:
                            kujdesi për femijë, kujdesi për të moshuarit, kujdesi për shtëpi dhe kujdesi për shtëpi dhe
                            kujdesi për kafshë.
                            <br/><br/> Shërbime të cilat do të ofrohen nga personat me pasqyrë profesionale për këto lloj
                            shërbimesh. </p>
                    </div>
                    </div>


             <Footer />


            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    saveFeedback: data => dispatch(saveFeedback(data)),
    getFeedback: data => dispatch(getFeedback(data))
})

export default connect(null, mapDispatchToProps)(Landingpage);
