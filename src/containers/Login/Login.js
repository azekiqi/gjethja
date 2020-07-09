import React from 'react';
import { connect } from 'react-redux';
import './Login.scss';
import {Link} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {confirm, login} from "../../actions/user";

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
        this.props.confirm(token).then(res => {
            console.log(res);
        })
    }


    emailhandler = event => {
        this.setState({
            email: event.target.value
        })
    }
    passwordhandler = event => {
        this.setState({
            password: event.target.value
        })
    }


    handleSubmit = event => {
        this.props.login(this.state).then(res => {
            console.log(res);
        })
    }

    render() {
        return (
             <div className="container-fluid login-container">
                 <div className="row">
                     <div className="col">
                         <form onSubmit={this.handleSubmit} className="login-form">
                             <div className="login-title"> Kyçja e përdoruesit </div>

                             <div className="form-group">
                                 <label htmlFor="email">Email adresa:</label>
                                 <input type="email"
                                        id="email-input"
                                        className="form-control"
                                        placeholder="Email adresa"
                                        value={this.state.email}
                                        onChange={this.emailhandler} />
                             </div>

                             <div className="form-group">
                                 <label htmlFor="password">Fjalëkalimi: </label>
                                 <input type="password"
                                        id="password-input"
                                        className="form-control"
                                        placeholder="Fjalëkalimi"
                                        value={this.state.password}
                                        onChange={this.passwordhandler} />
                             </div>


                             <div className="login-button">
                                 <button type="button"
                                         onClick={(e) => this.handleSubmit(e)}>Kyçu</button>
                             </div>

                         </form>
                     </div>
                 </div>
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
    login: data => dispatch(login(data)),
    confirm: data => dispatch(confirm(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);