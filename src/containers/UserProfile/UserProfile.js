import React from "react";
import {connect} from "react-redux";
import {getSpecifiedUser} from "../../actions/user";
import UserProfile from "../../components/Profile/UserProfile";

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
                image: null
            }
        }
    }

    componentDidMount() {
        this.props.getSpecifiedUser(this.props.match.params.id).then(res => {
            this.setState({user: res.data})
        });
    }

    renderProfile(user) {
        return (<div>
            <UserProfile profilePicture={user.image}
                         firstName={user.firstName}
                         lastName={user.lastName}
                         dateOfBirth={user.dateOfBirth}
                         phone={user.phoneNumber}
                         city={user.city}
                         address={user.address}
                         education={user.education}
                         bio={user.bio}
                         job={user.job}
            />
        </div>);
    };

    render() {
        return (
            <>
                <div className="container-fluid register-container">
                    <div className="row">
                        <div className="col">
                        </div>
                    </div>
                    {this.renderProfile(this.state.user)}
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