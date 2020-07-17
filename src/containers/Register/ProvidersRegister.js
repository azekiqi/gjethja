import React from 'react';
import './Register.scss';
import {providerRegister} from '../../actions/user';
import {connect} from "react-redux";
import MultiSelect from "react-multi-select-component";
import {options} from "../../utils/constants";


class ProvidersRegister extends React.Component {
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
            phoneNumber: "",
            education: "",
            jobs: [],
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            passwordError: "",
            confPassError: "",
            dateOfBirthError: "",
            cityError: "",
            addressError: "",
            genderError: "",
            phoneNumberError: "",
            educationError: "",
            jobsError: ""
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
            jobs: state.jobs.map(job => job.value),
            url: process.env.REACT_APP_CONFIRM_URL,
        }
    }

    setSelectedJobs = (jobs) => {
        this.setState({ jobs: jobs })
    }

    validate = () => {    //qitu
        let firstNameError = "";
        let lastNameError = "";
        let emailError = "";
        let passwordError = "";
        let confPassError = "";
        let dateOfBirthError = "";
        let cityError = "";
        let addressError = "";
        let genderError = "";
        let phoneNumberError = "";
        let educationError= "";
        let jobsError = "";

        if (!this.state.firstName > 2 || (!this.state.firstName)) {
            firstNameError = "Ky emër nuk është valid!"
        }
        if (!this.state.lastName > 2 || (!this.state.lastName)) {
            lastNameError = "Ky mbiemër nuk është valid!"
        }
        if (!this.state.email.includes('@') || (!this.state.email)) {
            emailError = "Kjo email adresë nuk është valide!"
        }
        if (!this.state.password > 8 || (!this.state.password)) {
            passwordError = "Ky fjalëkalim nuk është valid!"
        }
        if (!this.state.confirmPassword > 8 || (!this.state.confirmPassword)) {    //per match
            confPassError = "Ky fjalëkalim nuk është valid!"
        }
        if (!this.state.dateOfBirth) {
            dateOfBirthError = "Kjo datë nuk është valide!"
        }
        if (!this.state.city) {
            cityError = "Ky qytet nuk është valid!"
        }
        if (!this.state.address) {
            addressError = "Kjo adresë nuk është valide!"
        }
        if (!this.state.gender) {
            genderError = "Kjo gjini nuk është valide!"
        }
        if (!this.state.phoneNumber) {
            phoneNumberError = "Ky nr. telefoni nuk është valid!"
        }
        if (!this.state.educationError) {
            educationError = "Kjo e dhëneë nuk është valide!"
        }
        if (!this.state.jobsError) {
            jobsError = "Ky shërbim nuk është valid!"
        }
        if (emailError || firstNameError || lastNameError || passwordError || confPassError || dateOfBirthError
            || cityError || addressError || genderError || phoneNumberError || educationError || jobsError) {
            this.setState({
                emailError,
                firstNameError,
                lastNameError,
                passwordError,
                confPassError,
                dateOfBirthError,
                cityError,
                addressError,
                genderError,
                phoneNumberError,
                educationError,
                jobsError
            });
            return false;
        }
        return true;
    }
//deri qitu

    handleSubmit = (event) => {
        this.props.registerUser(this.formattedState(this.state));
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state)
        }
        // this.setState(initialState);
    }

    render() {
        return (
            <div className="container-fluid register-container">

                <div className="row">
                    <div className="col">
                        <form className="register-form">
                            <div className="register-title"> Regjistrohu!</div>

                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="name-input">Emri: </label>
                                        <input type="text"
                                               id="name-input"
                                               className="form-control"
                                               placeholder="Emri"
                                               value={this.state.firstName}
                                               onChange={(e) => this.setState({firstName: e.target.value})}/>
                                        <div className="error-style">{this.state.firstNameError}</div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="lastname-input">Mbiemri: </label>
                                        <input type="text"
                                               id="lastname-input"
                                               className="form-control"
                                               placeholder="Mbiemri"
                                               value={this.state.lastName}
                                               onChange={(e) => this.setState({lastName: e.target.value})}/>
                                        <div className="error-style">{this.state.lastNameError}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email adresa:</label>
                                <input type="email-input"
                                       id="email-input"
                                       className="form-control"
                                       placeholder="Email adresa"
                                       value={this.state.email}
                                       onChange={(e) => this.setState({email: e.target.value})}/>
                                <div className="error-style">{this.state.emailError}</div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Numri i telefonit:</label>
                                <input type="text"
                                       id="phone-input"
                                       className="form-control"
                                       placeholder="Numri i telefonit"
                                       value={this.state.phoneNumber}
                                       onChange={(e) => this.setState({phoneNumber: e.target.value})}/>
                                <div className="error-style">{this.state.phoneNumberError}</div>
                            </div>


                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="password-input">Fjalëkalimi: </label>
                                        <input type="password"
                                               id="password-input"
                                               className="form-control"
                                               placeholder="Fjalëkalimi"
                                               value={this.state.password}
                                               onChange={(e) => this.setState({password: e.target.value})}/>
                                        <div className="error-style">{this.state.passwordError}</div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="confirm-password-input">Përsërite fjalëkalimin: </label>
                                        <input type="password"
                                               id="confirm-password-input"
                                               className="form-control"
                                               value={this.state.confirmPassword}
                                               placeholder="Përsërite fjalëkalimin"
                                               onChange={(e) => this.setState({confirmPassword: e.target.value})}/>
                                        <div className="error-style">{this.state.confPassError}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Data e lindjes: </label>
                                <input type="date"
                                       id="birthday-input"
                                       className="form-control"
                                       placeholder="wtf"
                                       value={this.state.dateOfBirth}
                                       onChange={(e) => this.setState({dateOfBirth: e.target.value})}/>
                                <div className="error-style">{this.state.dateOfBirthError}</div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="gender-input">Gjinia: </label>
                                <select
                                    id="gender-input"
                                    className="form-control"
                                    onChange={(e) => this.setState({gender: e.target.value})}
                                    defaultValue="Zgjedh gjininë">
                                    <option defaultValue>Zgjedh gjininë</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <div className="error-style">{this.state.genderError}</div>
                            </div>

                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="city-input">Qyteti: </label>
                                        <select
                                            id="city-input"
                                            className="form-control"
                                            onChange={(e) => this.setState({city: e.target.value})}
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
                                        <div className="error-style">{this.state.cityError}</div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="address-input">Adresa: </label>
                                        <input type="text"
                                               id="address-input"
                                               className="form-control"
                                               value={this.state.address}
                                               onChange={(e) => this.setState({address: e.target.value})}
                                               placeholder="Adresa"/>
                                        <div className="error-style">{this.state.addressError}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio-input">Biografi e shkurtër: </label>
                                <input type="text"
                                       id="bio-input"
                                       className="form-control"
                                       placeholder="Biografia"
                                       value={this.state.bio}
                                       onChange={(e) => this.setState({bio: e.target.value})}/></div>

                            <div className="form-group">
                                <label htmlFor="education-input">Edukimi: </label>
                                <select
                                    id="education-input"
                                    className="form-control"
                                    onChange={(e) => this.setState({ education: e.target.value })}
                                    defaultValue="Zgjedh edukimin">
                                    <option defaultValue>Zgjedh edukimin</option>
                                    <option value="Ulet">I ulët</option>
                                    <option value="Mesem">I mesëm</option>
                                    <option value="Larte">I lartë</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Shërbimet: </label>
                                <MultiSelect
                                    options={options}
                                    value={this.state.jobs}
                                    onChange={this.setSelectedJobs}
                                    labelledBy={"Select"}
                                />
                                {/*<div className="error-style">{this.state.jobsError}</div>*/}
                            </div>

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
    registerUser: (data) => dispatch(providerRegister(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProvidersRegister);