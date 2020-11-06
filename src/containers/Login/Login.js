import React from 'react';
import { connect } from 'react-redux';
import './Login.scss';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {confirm, login} from "../../actions/user";
import { withRouter } from "react-router-dom";
import UserLogin from "../../components/Login/UserLogin";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    // componentDidMount() {
    //     const url = window.location.href;
    //     const token = url.split("token=")[1];
    //     if(token) {
    //         this.props.confirm(token).then(res => {
    //             alert("Email confirmed successfully");
    //             console.log(res);
    //         })
    //     }
    // }


    handleSubmit = (event) => {
        this.props.login(this.state).then(res => {
            this.props.history.push("/home");
        })
    }

    render() {
        return (
            <>
                <div className="container-fluid register-container">
                    <UserLogin />
                    {/*// handleSubmit={() => alert("LOGIN")}/>*/}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        //
    }
}

const mapDispatchToProps = dispatch => ({
    login: data => dispatch(login(data)),
    confirm: data => dispatch(confirm(data))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));