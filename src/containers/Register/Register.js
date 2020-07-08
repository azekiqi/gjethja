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
            url: process.env.REACT_APP_FRONT_URL
        }
    }

    handleSubmit = (event) => {
        this.props.registerUser(this.formattedState(this.state));
    }

    render() {
        return (
            <div className="register-container">
                 <form className="register-form">
                    <h1> Regjistrimi i përdoruesit </h1>
                    <label>Emri: </label>
                    <input type="text"
                           value={this.state.firstName}
                           placeholder="Emri"
                           onChange={(e) => this.setState({ firstName: e.target.value })} />

                    <label>Mbiemri: </label>
                    <input type="text"
                           value={this.state.lastName}
                           placeholder="Mbiemri"
                           onChange={(e) => this.setState({ lastName: e.target.value })} />

                    <label htmlFor="email">Email adresa:</label>
                    <input type="email"
                           value={this.state.email}
                           placeholder="Email adresa"
                           onChange={(e) => this.setState({ email: e.target.value })} />

                     <label htmlFor="email">Numri i telefonit:</label>
                     <input type="text"
                            value={this.state.phoneNumber}
                            placeholder="Numri i telefonit"
                            onChange={(e) => this.setState({ phoneNumber: e.target.value })} />

                    <label htmlFor="pwd">Fjalëkalimi: </label>
                    <input type="password" id="pwd" name="pwd"
                           value={this.state.password}
                           placeholder="Fjalëkalimi"
                           onChange={(e) => this.setState({ password: e.target.value })} />

                    <label>Përsërite fjalëkalimin: </label>
                    <input type="password"
                           value={this.state.confirmPassword}
                           placeholder="Përsërite fjalëkalimin"
                           onChange={(e) => this.setState({ confirmPassword: e.target.value })} />

                    <label>Biografi e shkurtër: </label>
                    <input type="text"
                           value={this.state.bio}
                           placeholder="Biografia"
                           onChange={(e) => this.setState({ bio: e.target.value })} />

                    <label>Data e lindjes: </label>
                    <input type="date"
                           value={this.state.dateOfBirth}
                           onChange={(e) => this.setState({ dateOfBirth: e.target.value })} />

                    <label>Qyteti: </label>
                    <select
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

                    <label>Adresa: </label>
                    <input type="text"
                           value={this.state.address}
                           onChange={(e) => this.setState({ address: e.target.value })}
                           placeholder="Adresa"/>

                    <label>Gjinia: </label>
                    <select
                        onChange={(e) => this.setState({ gender: e.target.value })}
                        defaultValue="Zgjedh gjininë">
                        <option defaultValue>Zgjedh gjininë</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <button type="button" onClick={() => this.handleSubmit()}>Submit</button>
                </form>
                <div className={"button"}>
                    <Link to={"/home"}>RETURN TO HOME</Link>
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