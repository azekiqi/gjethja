import React from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import './Home.scss';
import {connect} from "react-redux";
import {getProfiles} from "../../actions/profiles";
import Profile from "../../components/Profile/Profile";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            modalId: null,
            selected_post: {},
            profiles: {}
        }
    }

    componentDidMount() {
        this.setState({profiles: this.props.getProfiles()});
    }

    handleProfileClick = (id) => {
        this.props.history.push("/uprofile/" + id);
    };

    render() {
        return (
            <div>
                <div className="home-container">
                    <Sidebar/>
                    <div className="main-content">
                        <div className="profiles">
                            {
                                this.props.profiles.map((profile, index) => {
                                    console.log("omg", profile.id);
                                    return (<Profile
                                        id={profile.id}
                                        title={profile.firstName + " " + profile.lastName}
                                        info={"Shërbimet: " + profile.jobs.join(", ")}
                                        description={"Nr. Tel: " + profile.phoneNumber}
                                        handleClick={() => this.handleProfileClick(profile.id)}
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
