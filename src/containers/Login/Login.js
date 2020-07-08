import React from 'react';
import { connect } from 'react-redux';
import './Login.scss';
import {Link} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { confirm } from "../../actions/user";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email:"",
            password:"",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    componentDidMount() {
        const url = window.location.href;
        const token = url.split("token=")[1];
        this.props.confirm(token);
    }


    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }


    handleSubmit = (event) => {
        alert(`${this.state.firstName}' ${this.state.email} Kycja e suksesshme!`)
        console.log(this.state);
        this.setState({
            email:"",
            password:"",
        })
        event.preventDefault()

    }

    render() {
        return (
             <div className="login-container">
                <form onSubmit={this.handleSubmit} className="login-form">
                    <h1> Kyçja e përdoruesit </h1>

                    <label htmlFor="email">Email adresa:</label>
                    <input type="email"
                           value={this.state.email}
                           onChange={this.emailhandler}
                           placeholder="Email adresa"/>

                    <label htmlFor="pwd">Fjalëkalimi: </label>
                    <input type="password" id="pwd" name="pwd"
                           value={this.state.password}
                           onChange={this.passwordhandler}
                           placeholder="Fjalëkalimi"/>

                    <input className="submit" type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        //
    }
}

const mapDispatchToProps = dispatch => ({
    confirm: data => dispatch(confirm(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);