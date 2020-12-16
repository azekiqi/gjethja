import React from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import './Home.scss';
import {connect} from "react-redux";
import {getProfiles} from "../../actions/profiles";
import Modal from "react-modal";
import Profile from "../../components/Profile/Profile";
import RateProvider from "../../components/Profile/RateProvider";
import {createRate} from "../../actions/user";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            modalId: null,
            selected_post: {},
            profiles: {},
            rating: 0,
        }
    }

    componentDidMount() {
        this.setState({profiles: this.props.getProfiles()});
    }

    handleProfileClick = (id) => {
        this.props.history.push("/uprofile/" + id);
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
    }

    openModal = (id) => {
        this.setState({ isModalOpen: true });
    }

    handleRatingChange = (rating, id) => {
        this.setState({rating});
        const { user } = this.state;
        const data = {
            providerId: id,
            rate: rating
        }
        this.props.createRate(data);
    }


    render() {
        const { rating } = this.state;
        return (
            <div>
                <div className="home-container">
                    <Sidebar/>
                    <div className="main-content">
                        <div className="profiles">
                            {
                                this.props.profiles.map((profile, index) => {
                                    console.log("omg", profile.averageRate);
                                    return (<Profile
                                        id={profile.id}
                                        title={profile.firstName + " " + profile.lastName}
                                        info={"Shërbimet: " + profile.jobs.join(", ")}
                                        description={"Nr. Tel: " + profile.phoneNumber}
                                        handleClick={() => this.handleProfileClick(profile.id)}
                                        handleRateClick={(rating) => this.handleRatingChange(rating, profile.id)}
                                        rating={profile.averageRate}
                                    />)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        profiles: state.profiles,
    }
}

const mapDispatchToProps = dispatch => ({
    getProfiles: data => dispatch(getProfiles()),
    createRate: data => dispatch(createRate(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
