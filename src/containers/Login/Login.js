import React from 'react';
import { connect } from 'react-redux';
import './Login.scss';
import {Link} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {confirm, login} from "../../actions/user";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // email:"",
            // password:"",
            // emailError: "",
            // passwordError: "",
            fields: {},
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    }

    componentDidMount() {
        const url = window.location.href;
        const token = url.split("token=")[1];
        if(token) {
            this.props.confirm(token).then(res => {
                alert("Email confirmed successfully");
                console.log(res);
            })
        }
    }

    // emailhandler = event => {
    //     this.setState({
    //         email: event.target.value
    //     })
    // }
    // passwordhandler = event => {
    //     this.setState({
    //         password: event.target.value
    //     })
    // }

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["emailid"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }

    }
    //
    // validate = () => {
    //     let emailError = "";
    //     let passwordError = "";
    //
    //     if (!this.state.email.includes('@') || (!this.state.email)) {
    //         emailError = "Kjo email adresë nuk është valide!"
    //     }
    //     if (!this.state.password > 8 || (!this.state.password)) {
    //         passwordError = "Ky fjalëkalim nuk është valid!"
    //     }
    //     if (emailError || passwordError) {
    //         this.setState({emailError, passwordError})
    //         return true;
    //     }
    // }

    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }

        if (typeof fields["emailid"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
                formIsValid = false;
                errors["emailid"] = "*Please enter valid email-ID.";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;


    }

    handleSubmit = event => {
        this.props.login(this.state).then(res => {
            setTimeout(() => {
                this.props.history.push("/home");
            }, 500)
        })
            const isValid = this.validate();
            if(isValid){
                console.log(this.state)
            }
    }

    render() {
        return (
             <div className="container-fluid login-container">
                 <div className="row">
                     <div className="col">
                         {/*<form onSubmit={this.handleSubmit} className="login-form">*/}
                         <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
                             <div className="login-title"> Kyçja e përdoruesit </div>

                             <div className="errorMsg">{this.state.errors.username}</div>
                             <label>Email ID:</label>
                             <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
                             <div className="errorMsg">{this.state.errors.emailid}</div>

                             <label>Password</label>
                             <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                             <div className="errorMsg">{this.state.errors.password}</div>
                             <input type="submit" className="button"  value="Register"/>
                         </form>
                             {/*<div className="form-group">*/}
                             {/*    <label htmlFor="email">Email adresa:</label>*/}
                             {/*    <input type="email"*/}
                             {/*           id="email-input"*/}
                             {/*           className="form-control"*/}
                             {/*           placeholder="Email adresa"*/}
                             {/*           value={this.state.email}*/}
                             {/*           onChange={this.emailhandler} />*/}
                             {/*           <div className="error-style">{this.state.emailError}</div>*/}

                             {/*</div>*/}

                             {/*<div className="form-group">*/}
                             {/*    <label htmlFor="password">Fjalëkalimi: </label>*/}
                             {/*    <input type="password"*/}
                             {/*           id="password-input"*/}
                             {/*           className="form-control"*/}
                             {/*           placeholder="Fjalëkalimi"*/}
                             {/*           value={this.state.password}*/}
                             {/*           onChange={this.passwordhandler} />*/}
                             {/*    <div className="error-style">{this.state.passwordError}</div>*/}

                             {/*</div>*/}


                             {/*<div className="login-button">*/}
                             {/*    <button type="button"*/}
                             {/*            onClick={(e) => this.handleSubmit(e)}>Kyçu</button>*/}
                             {/*</div>*/}

                         {/*</form>*/}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));