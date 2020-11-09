import React from "react";
import {ProfileTabs} from "../../utils/constants";
import {connect} from "react-redux";
import Header from "../../components/Header/Header";
import {getUser} from "../../actions/user";
import {render} from "react-dom";


class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: "",
                lastName: "",
                bio: "",
                city: "",
                address: "",
                phoneNumber: "",
                image: null
            }
        }
    }

    componentDidMount() {
        this.props.getUser().then(res => {
            this.setState({user: res.data});
        })
    }

    // renderProfile = () => {
    //     this.props.getUser().then(res => {
    //         this.setState({user: res.data});
    //     })
    // };

    render() {
        console.log(this.state.user);
        return (
                <div className="container-fluid register-container">
                    <div className="row">
                        <div className="col">
                            < this.state.user />
                        </div>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
}

const mapDispatchToProps = dispatch => ({
    getUser: () => dispatch(getUser()),
});


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
