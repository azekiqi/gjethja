import React from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import './Home.scss';
import {connect} from "react-redux";
import {getProfiles} from "../../actions/profiles";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            modalId: null,
            selected_post: {}
        }
    }

    componentDidMount() {
        this.props.getProfiles();
    }

    render() {
        return (
            <div>
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
