import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Landingpage.scss";
import Baby  from "../../assets/images/baby.png";
import Elder  from "../../assets/images/elder.png";
import Pet from "../../assets/images/pet.png";
import House  from "../../assets/images/house.png";
import Transport from "../../assets/images/transport.png";
import Date from "../../assets/images/date.png";
import School from "../../assets/images/school.png";
import Night from "../../assets/images/night.png";
import Ardi from "../../assets/images/Ardi.jpg";
import Dobby from "../../assets/images/Dobby.jpg";
import Slideshow from "./Slideshow";
import Modal from "react-modal";
import {getFeedback, saveFeedback} from "../../actions/user";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Ick from "../../assets/images/ick.png";
import Unicef from "../../assets/images/unicef.png";
import Ada from "../../assets/images/ada.png";
import Ing from "../../assets/images/ing.png";
import Inlab from "../../assets/images/inlab.png";

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
            <div>x
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

                <div className="services-extra">
                    <div className="services-title">Kujdesi që ju nevojitet, kur keni nevojë për të</div>
                    <div className="services-cards">
                        <div className="services-card">
                            <div className="services-card-img">
                                <img src={Date}/>
                            </div>
                            <div className="service-card-text">
                                Kujdes i rregullt ose me kohë të pjesshme
                            </div>
                        </div>
                        <div className="services-card">
                            <div className="services-card-img">
                                <img src={Transport}/>
                            </div>
                            <div className="service-card-text">
                                Pickups & Dropoffs
                            </div>
                        </div>
                        <div className="services-card">
                            <div className="services-card-img">
                                <img src={Night}/>
                            </div>
                            <div className="service-card-text">
                                Overnights
                            </div>
                        </div>
                    </div>
                </div>

                <div className="services-extra">
                    <div className="services-cards">
                        <div className="services-card">
                            <div className="services-card-img">
                                <img src={Date}/>
                            </div>
                            <div className="service-card-text">
                                Kujdes i rregullt ose me kohë të pjesshme
                            </div>
                        </div>
                        <div className="services-card">
                            <div className="services-card-img">
                                <img src={Transport}/>
                            </div>
                            <div className="service-card-text">
                                Pickups & Dropoffs
                            </div>
                        </div>
                        <div className="services-card">
                            <div className="services-card-img">
                                <img src={Night}/>
                            </div>
                            <div className="service-card-text">
                                Overnights
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testimonials">
                    <Carousel
                        showArrows={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        interval={6100}
                    >
                        <div>
                            <img src={Pet} />
                            <div className="myCarousel">
                                <h3>Shirley Fultz</h3>
                                <h4>Designer</h4>
                                <p>
                                    It's freeing to be able to catch up on customized news and not be
                                    distracted by a social media element on the same site
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src={Dobby} />
                            <div className="myCarousel">
                                <h3>Daniel Keystone</h3>
                                <h4>Designer</h4>
                                <p>
                                    The simple and intuitive design makes it easy for me use. I highly
                                    recommend Fetch to my peers.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src={Ardi} />
                            <div className="myCarousel">
                                <h3>Theo Sorel</h3>
                                <h4>Designer</h4>
                                <p>
                                    I enjoy catching up with Fetch on my laptop, or on my phone when
                                    I'm on the go!
                                </p>
                            </div>
                        </div>
                    </Carousel>
                </div>

                <div className="partners">
                    <div className="partners-cards">
                        {/*<div className="partners-card-title">Miqt e Gjethes</div>*/}
                        <div className="partners-card-img">
                            <img src={Ick}/>
                        </div>
                        <div className="partners-card-img">
                            <img src={Unicef}/>
                        </div>
                        <div className="partners-card-img">
                            <img src={Ada}/>
                        </div>
                        <div className="partners-card-img">
                            <img src={Ing}/>
                        </div>
                        <div className="partners-card-img">
                            <img src={Inlab}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    saveFeedback: data => dispatch(saveFeedback(data)),
    getFeedback: data => dispatch(getFeedback(data))
})

export default connect(null, mapDispatchToProps)(Landingpage);
