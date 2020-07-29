import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Landingpage.scss";
import Baby  from "../../assets/images/baby.png";
import Elder  from "../../assets/images/elder.png";
import Pet from "../../assets/images/pet.png";
import House  from "../../assets/images/house.png";
import Slideshow from "./Slideshow";
import {Elements} from "@stripe/react-stripe-js";
import Stripe from "../../components/Stripe/Stripe";
import Modal from "react-modal";
import { saveFeedback } from "../../actions/user";
import { connect } from "react-redux";

class Landingpage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            modalId: null,
            feedback: ""
        }
    }

    closeModal = () => {
        this.setState({ isModalOpen: false });
    }

    openModal = (id) => {
        this.setState({ isModalOpen: true });
    }

    handleSubmit = () => {
        this.props.saveFeedback(this.state.feedback).then(() => {

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
                    <div className="services-title">Shërbimet tona</div>
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
                             Kujdes për fëmijë
                         </div>
                     </div>
                     <div className="services-card">
                         <div className="services-card-img">
                             <img src={Pet}/>
                         </div>
                         <div className="service-card-text">
                             Kujdes për fëmijë
                         </div>
                     </div>
                     <div className="services-card">
                         <div className="services-card-img">
                             <img src={House}/>
                         </div>
                        <div className="service-card-text">
                            Kujdes për fëmijë
                        </div>
                     </div>
                    </div>
                </div>


                <div className="ourvalues">
                    <div className="ourvalues-title">Çfarë thonë miqt dhe partnerët për ne</div>
                    <div className="ourvalues-cards">
                        <div className="ourvalues-card">
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
                        <div className="ourvalues-card">
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
                        <div className="ourvalues-card">
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

                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={this.closeModal}
                        contentLabel="Payment Modal"
                        className="custom-modal"
                        overlayClassName="custom-modal-overlay">

                        <div className="form-group">
                            <label htmlFor="feedback-input">Feedback: </label>
                            <textarea type="text"
                                   id="feedback-input"
                                   className="form-control"
                                   value={this.state.feedback}
                                      onChange={(e) => this.setState({feedback: e.target.value})}></textarea></div>

                        <button className="btn btn-primary"
                                onClick={() => this.handleSubmit()}>
                            Submit
                        </button>
                    </Modal>
                    <button className="btn btn-primary"
                             onClick={() => this.setState({ isModalOpen: true })}>
                        Feedback
                    </button>
                </div>
             <Footer />


            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    saveFeedback: data => dispatch(saveFeedback(data))
})

export default connect(null, mapDispatchToProps)(Landingpage);
