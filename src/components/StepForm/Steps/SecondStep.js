import React from "react";

class SecondStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            address: "",
            gender: "",
            phoneNumber: "",
            cityError: "",
            addressError: "",
            genderError: "",
            phoneNumberError: ""
        }
    }

    validate = () => {
        let genderError = "";
        let cityError = "";
        let addressError = "";
        let phoneNumberError = "";

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
        if ( cityError || addressError || genderError || phoneNumberError) {
            this.setState({
                cityError,
                addressError,
                genderError,
                phoneNumberError
            });
            return false;
        }
        return true;
    }


    handleSubmit = (event) => {
        this.props.registerUser(this.formattedState(this.state));
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state)
        }
    }

    render() {
        return (
            <div className="container-fluid register-container">

                <div className="row">
                    <div className="col">
                        <form className="register-form">
                            <div className="register-title"> Vazhdo regjistrimin!</div>

                            <div className="form-row">
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
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}


export default SecondStep;