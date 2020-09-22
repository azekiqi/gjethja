import React from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import './Home.scss';
import {connect} from "react-redux";
import {CARD_OPTIONS, HomeTabs} from "../../utils/constants";
import {getProfiles} from "../../actions/profiles";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: HomeTabs.Profiles,
            isModalOpen: false,
            modalId: null,
            selected_post: {}
        }
    }

    componentDidMount() {
        this.props.getProfiles();

    }

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
        const {currentTab} = this.state;
        return (
            <div>
                <Header/>
                <div className="home-container">

                    <Sidebar/>

                    <div className="main-content">
                        <div className="navigation">
                                    Profiles
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
