import React from "react";
import "./UserProfile.scss";
import {connect} from "react-redux";
import {getAverageRate, getSpecifiedUser} from "../../actions/user";
import {createRate} from "../../actions/user";
import BlankProfile from "../../assets/images/blank_profile.jpg";
import Rating from "../../components/Rating/Rating";

class userProfile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            rating: 0,
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
                image: null,
            },
            averageRate: 0,
        }
    }

    componentDidMount() {
        this.props.getSpecifiedUser(this.props.match.params.id).then(res => {
            this.setState({user: res.data})
        });
        this.props.getAverageRate(this.props.match.params.id).then(res => {
            console.log("alketa", res.data.average);
            this.setState({averageRate: res.data.average})
        });
        console.log(this.props.averageRate);
    }

    handleRatingChange = (rating, double) => {
        this.setState({rating})
        const { user } = this.state;
        const data = {
            providerId: user.id,
            rate: rating
        }
        this.props.createRate(data);
    }

    render() {
        const {user, rating} = this.state;
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
                                    <div className="row">
                                        <div className="col">
                                            <Rating
                                                rating={rating}
                                                onChange={(rating) => this.handleRatingChange(rating)}/>
                                        </div>
                                        <div>
                                            {this.state.averageRate}
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
    createRate: data => dispatch(createRate(data)),
    getAverageRate: data => dispatch(getAverageRate(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(userProfile);