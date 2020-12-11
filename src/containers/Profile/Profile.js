import React from "react";
import {connect} from "react-redux";
import {editProfile, getUser, uploadProfilePicture} from "../../actions/user";
import "./Profile.scss";
import {initialRegisterDataObject} from "../../utils/constants";
import BlankProfile from "../../assets/images/blank_profile.jpg";
import LoginForm from "../../components/Forms/Login/Login";
import Profile from "../../components/Forms/Profiles/Seekers/Profile";
import Step from "../../components/Forms/Step/Step";

class profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    handleSubmit = (event) => {
        this.props.editProfile(this.state.user).then(res => {
            if (this.state.image) {
                this.props.uploadProfilePicture(this.state.image).then(res => {
                    this.props.getUser().then(res => {
                        this.setState({user: res.data});
                    })
                })
            } else {
                this.props.getUser().then(res => {
                    this.setState({user: res.data});
                })
            }
        })
    }

    render() {
        return (
            <div>
                <Profile
                    handleSubmit={() => this.handleSubmit()}/>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = dispatch => ({
    getUser: data => dispatch(getUser()),
    editProfile: (data) => dispatch(editProfile(data)),
    uploadProfilePicture: (data) => dispatch(uploadProfilePicture(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(profile);
