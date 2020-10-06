import React from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import './SeekersHome.scss';
import {connect} from "react-redux";
import {CARD_OPTIONS, HomeTabs} from "../../utils/constants";
import {getProfiles} from "../../actions/profiles";
import Profile from "../../components/Profile/Profile";
import SeekersRegister from "../Register/SeekersRegister";
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
        this.history.push("/uprofile/" + id)
    };

    closeModal = () => {
        this.setState({isModalOpen: false});
    }

    openModal = (id) => {
        this.setState({isModalOpen: true, modalId: id});
    }

    renderModalContent = () => {
        return (
            <div className="modal-content">
                <div className="fistName">
                    {this.state.selected_post.firstName}
                </div>
                <div className="lastName">
                    {this.state.selected_post.lastName}
                </div>
                <div className="phoneNumbers">
                    {this.state.selected_post.phoneNumber}
                </div>
                <div className="jobs">
                    {this.state.selected_post.jobs}
                </div>
            </div>
        )
    }

    render() {
        const {currentTab, isModalOpen} = this.state;
        return (
            <div>
                <Header/>
                <div className="home-container">

                    <Sidebar/>
                    <div className="main-content">
                        <div className="navigation">
                            <div className="navigation-link">
                                {/*/!*<button>*!/*/}
                                {/*    Profiles*/}
                                {/*</button>*/}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            </div>
                        </div>

                        {  <div className="profiles">
                            {
                                this.props.profiles.map((profile, index) => {
                                    console.log(profile.id);
                                    return <Profile
                                        id={profile.id}
                                        title={profile.firstName + " " + profile.lastName}
                                        info={"Shërbimet: " + profile.jobs.join(", ")}
                                        description={"Nr. Tel: " + profile.phoneNumber}
                                        handleClick={() => this.handleProfileClick(profile.id)}
                                    />
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
}

const mapDispatchToProps = dispatch => ({
    getProfiles: data => dispatch(getProfiles()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SeekersHome));