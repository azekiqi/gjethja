import React from 'react';
import './Register.scss';
import {PostRequest} from "../../utils/PostRequest";
import {Link} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { register } from '../../actions/user';
import { connect } from "react-redux";

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            bio: "",
            dateOfBirth: "",
            city: "",
            address: "",
            gender: "",
            phoneNumber: ""
        }
    }

    formattedDateOfBirth = (date) => {
        let splitDate = date.split("-");
        return [splitDate[2], splitDate[1], splitDate[0]].join("-"); //reformat
    }

    formattedState = (state) => {
        return {
            ...state,
            dateOfBirth: this.formattedDateOfBirth(state.dateOfBirth),
            url: process.env.REACT_APP_CONFIRM_URL
        }
    }

    handleSubmit = (event) => {
        this.props.registerUser(this.formattedState(this.state));
    }

    render() {
        return (
            <div className="container-fluid register-container">

                <div className="row">
                    <div className="col">
                        <form className="register-form">
                            <div className="register-title"> Regjistrohu! </div>

                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="name-input">Emri: </label>
                                        <input type="text"
                                               id="name-input"
                                               className="form-control"
                                               placeholder="Emri"
                                               value={this.state.firstName}
                                               onChange={(e) => this.setState({firstName: e.target.value})}/></div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="lastname-input">Mbiemri: </label>
                                        <input type="text"
                                               id="lastname-input"
                                               className="form-control"
                                               placeholder="Mbiemri"
                                               value={this.state.lastName}
                                               onChange={(e) => this.setState({lastName: e.target.value})}/></div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email adresa:</label>
                                <input type="email-input"
                                       id="email-input"
                                       className="form-control"
                                       placeholder="Email adresa"
                                       value={this.state.email}
                                       onChange={(e) => this.setState({ email: e.target.value })} /></div>

                            <div className="form-group">
                                <label htmlFor="phone">Numri i telefonit:</label>
                                <input type="text"
                                       id="phone-input"
                                       className="form-control"
                                       placeholder="Numri i telefonit"
                                       value={this.state.phoneNumber}
                                       onChange={(e) => this.setState({ phoneNumber: e.target.value })} /></div>


                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="password-input">Fjalëkalimi: </label>
                                        <input type="password"
                                               id="password-input"
                                               className="form-control"
                                               placeholder="Fjalëkalimi"
                                               value={this.state.password}
                                               onChange={(e) => this.setState({ password: e.target.value })} /></div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="confirm-password-input">Përsërite fjalëkalimin: </label>
                                        <input type="password"
                                               id="confirm-password-input"
                                               className="form-control"
                                               value={this.state.confirmPassword}
                                               placeholder="Përsërite fjalëkalimin"
                                               onChange={(e) => this.setState({ confirmPassword: e.target.value })} /></div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Data e lindjes: </label>
                                <input type="date"
                                       id="birthday-input"
                                       className="form-control"
                                       placeholder="wtf"
                                       value={this.state.dateOfBirth}
                                       onChange={(e) => this.setState({ dateOfBirth: e.target.value })} /></div>

                            <div className="form-group">
                                <label htmlFor="gender-input">Gjinia: </label>
                                <select
                                    id="gender-input"
                                    className="form-control"
                                    onChange={(e) => this.setState({ gender: e.target.value })}
                                    defaultValue="Zgjedh gjininë">
                                    <option defaultValue>Zgjedh gjininë</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>

                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="city-input">Qyteti: </label>
                                        <select
                                            id="city-input"
                                            className="form-control"
                                            onChange={(e) => this.setState({ city: e.target.value })}
                                            defaultValue="Zgjedh qytetin">
                                            <option defaultValue>Zgjedh qytetin</option>
                                            <option value="Prishtinë">Prishtinë</option>
                                            <option value="Pejë">Pejë</option>
                                            <option value="Prizren">Prizren</option>
                                            <option value="Gjakovë">Gjakovë</option>
                                            <option value="Fushë Kosovë">Fushë Kosovë</option>
                                            <option value="Ferizaj">Ferizaj</option>
                                            <option value="Vushtrri">Vushtrri</option>
                                            <option value="Gjilan">Gjilan</option>
                                            <option value="Mitrovicë">Mitrovicë</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="address-input">Adresa: </label>
                                        <input type="text"
                                               id="address-input"
                                               className="form-control"
                                               value={this.state.address}
                                               onChange={(e) => this.setState({ address: e.target.value })}
                                               placeholder="Adresa"/></div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio-input">Biografi e shkurtër: </label>
                                <input type="text"
                                       id="bio-input"
                                       className="form-control"
                                       placeholder="Biografia"
                                       value={this.state.bio}
                                       onChange={(e) => this.setState({ bio: e.target.value })} /></div>

                            <div className="register-button">
                                <button type="button" onClick={() => this.handleSubmit()}>Submit</button>
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
        user: state.user
    };
}

const mapDispatchToProps = dispatch => ({
    registerUser: (data) => dispatch(register(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);