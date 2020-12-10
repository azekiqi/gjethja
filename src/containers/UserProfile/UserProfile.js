import React from "react";
import "./UserProfile.scss";
import {connect} from "react-redux";
import {getSpecifiedUser} from "../../actions/user";
import BlankProfile from "../../assets/images/blank_profile.jpg";
import formConfig from "../../components/Forms/Config";

class userProfile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                id: "",
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                education: "",
                bio: "",
                city: "",
                address: "",
                phoneNumber: "",
                jobs: null,
                image: null
            }
        }
    }

    componentDidMount() {
        this.props.getSpecifiedUser(this.props.match.params.id).then(res => {
            this.setState({user: res.data})
        });
    }

    render() {
        const {user} = this.state;
        const image = (user && user.image) ? "data:image/png;base64," + user.image : BlankProfile;
        return (
            <>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-header">
                                    Picture
                                </div>
                                <div className="card-body">
                                    <div className="profile-picture-container">
                                        <img
                                            alt="Logo"
                                            className="profile-picture"
                                            src={image}  />
                                    </div>
                                    <div className="text-center mt-3">
                                        <h5>{ user.firstName } { user.lastName }</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-8">
                            <div className="card">
                                <div className="card-header">
                                    Profile
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-3">
                                            <div className="info-row">
                                                Data e lindjes
                                            </div>
                                            <div className="info-row">
                                                Numri i telefonit
                                            </div>
                                            <div className="info-row">
                                                Qyteti
                                            </div>
                                            <div className="info-row">
                                                Adresa
                                            </div>
                                            <div className="info-row">
                                                Edukimi
                                            </div>
                                            <div className="info-row">
                                                Profesioni
                                            </div>
                                            <div className="info-row">
                                                Biografia
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="info-row">
                                                {user.dateOfBirth}
                                            </div>
                                            <div className="info-row">
                                                {user.phoneNumber}
                                            </div>
                                            <div className="info-row">
                                                {user.city}
                                            </div>
                                            <div className="info-row">
                                                {user.address}
                                            </div>
                                            <div className="info-row">
                                                {user.education}
                                            </div>
                                            <div className="info-row">
                                                {user.jobs}
                                            </div>
                                            <div className="info-row">
                                                {user.bio}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
}

const mapDispatchToProps = dispatch => ({
    getSpecifiedUser: id => dispatch(getSpecifiedUser(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(userProfile);