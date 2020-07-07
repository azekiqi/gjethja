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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    formattedDateOfBirth = (date) => {
        let splitDate = date.split("-");
        return [splitDate[2], splitDate[1], splitDate[0]].join("-"); //reformat
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
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
    confirmhandler = (event) => {
        this.setState({
            confirmPassword: event.target.value
        })
    }
    biohandler = (event) => {
        this.setState({
            bio: event.target.value
        })
    }
    datehandler = (event) => {
        this.setState({
            dateOfBirth: event.target.value
        })
    }
    cityhandler = (event) => {
        this.setState({
            city: event.target.value
        })
    }
    addresshandler = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    phonehandler = (event) => {
        this.setState({
            phoneNumber: event.target.value
        })
    }

    handleSubmit = (event) => {
        this.props.registerUser(this.state);
    }

    render() {
        return (
            <div className="register-container">
                 <form className="register-form">
                    <h1> Regjistrimi i përdoruesit </h1>
                    <label>Emri: </label>
                    <input type="text"
                           value={this.state.firstName}
                           onChange={this.firsthandler}
                           placeholder="Emri"/>

                    <label>Mbiemri: </label>
                    <input type="text"
                           value={this.state.lastName}
                           onChange={this.lasthandler}
                           placeholder="Mbiemri"/>

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

                    <label>Përsërite fjalëkalimin: </label>
                    <input type="password"
                           value={this.state.confirmPassword}
                           onChange={this.confirmhandler}
                           placeholder="Përsërite fjalëkalimin"/>

                    <label>Biografi e shkurtër: </label>
                    <input type="text"
                           value={this.state.bio}
                           onChange={this.biohandler}
                           placeholder="Biografia"/>

                    <label>Data e lindjes: </label>
                    <input type="date"
                           value={this.state.dateOfBirth}
                           onChange={this.datehandler}/>

                    <label>Qyteti: </label>
                    <select onChange={this.cityhandler} defaultValue="Zgjedh qytetin">
                        <option defaultValue>Zgjedh qytetin</option>
                        <option value="Prishtinë">Prishtinë</option>
                        <option value="Pejë">Pejë</option>
                        <option value="Prizren">Prizren</option>
                        <option value="Gjakovë">Gjakovë</option>
                        <option value="Fushë Kosovë">Fushë Kosovë</option>
                        <option value="Ferizaj">Ferizaj</option>
                        <option value="Skënderaj">Skënderaj</option>
                        <option value="Vushtrri">Vushtrri</option>
                        <option value="Gjilan">Gjilan</option>
                    </select>

                    <label>Adresa: </label>
                    <input type="text"
                           value={this.state.address}
                           onChange={this.addresshandler}
                           placeholder="Adresa"/>

                    <label>Gjinia: </label>
                    <select onChange={this.genderhandler} defaultValue="Zgjedh gjininë">
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