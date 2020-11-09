import React from 'react';
import {connect} from 'react-redux';
import './Login.scss';
import {confirm, login} from "../../actions/user";
import {withRouter} from "react-router-dom";
import LoginForm from "../../components/Forms/Login/Login";

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (data) => {
        this.props.login(data).then(res => {
            this.props.history.push("/home");
        })
    };

    render() {
        return (
            <div className="login-container">
                <LoginForm handleSubmit={(data) => this.handleSubmit(data)}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    login: data => dispatch(login(data)),
    confirm: data => dispatch(confirm(data))
})

export default withRouter(connect(null, mapDispatchToProps)(Login));
