import React from "react";

class FirstStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            dateOfBirth: "",
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            passwordError: "",
            confPassError: "",
            dateOfBirthError: "",
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

    validate = () => {
        let firstNameError = "";
        let lastNameError = "";
        let emailError = "";
        let passwordError = "";
        let confPassError = "";
        let dateOfBirthError = "";

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

        if (emailError || firstNameError || lastNameError || passwordError || confPassError || dateOfBirthError ) {
            this.setState({
                emailError,
                firstNameError,
                lastNameError,
                passwordError,
                confPassError,
                dateOfBirthError,
            });
            return false;
        }
        return true;
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


                        </form>
                    </div>
                </div>

            </div>
        );
    }
}


export default FirstStep;