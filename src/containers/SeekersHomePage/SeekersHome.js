import React from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import './SeekersHome.scss';
import {connect} from "react-redux";
import {getProfiles} from "../../actions/profiles";
import Profile from "../../components/Profile/Profile";
import SeekersRegister from "../Register/Seekers";
import {withRouter} from "react-router-dom";


class SeekersHome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            modalId: null,
        }
    }

    componentDidMount() {
        this.props.getProfiles();
    }

    handleProfileClick = (id) => {
        this.props.history.push({
            pathname: "/uprofile/" + id,
            state: {id: id}
        })
    };

    render() {
        return (
            <div>
                <div className="home-container">

                    <Sidebar/>
                    <div className="main-content">
                        {  <div className="profiles" >
                            {
                                this.props.profiles.map((profile, index) => {
                                    console.log(profile.id);
                                    return <Profile
                                        id={profile.id}
                                        title={profile.firstName + " " + profile.lastName}
                                        info={"Shërbimet: " + profile.jobs.join(", ")}
                                        description={"Nr. Tel: " + profile.phoneNumber}
                                        handleClick={() => this.handleProfileClick(profile.id)}/>
                                })
                            }
                        </div>}
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
};

const mapDispatchToProps = dispatch => ({
    getProfiles: data => dispatch(getProfiles()),
    }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SeekersHome));